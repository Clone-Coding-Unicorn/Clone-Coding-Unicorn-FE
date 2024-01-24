import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { api } from '../axios/api';
import CheckBox from './CheckBox';

// useInput 훅
// useState를 사용하여 상태를 관리하는 커스텀 훅
// 초기값(initialValue)을 받아와서 value와 setValue를 반환
function useInput(initialValue = '') {
    // value 상태와 해당 상태를 업데이트하는 setValue 함수 선언
    const [value, setValue] = useState(initialValue);

    // input 요소의 변경을 감지하고 상태를 업데이트하는 이벤트 핸들러 함수
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    // value와 handleChange 함수를 배열로 묶어 반환
    // 이후 이 훅을 사용하는 컴포넌트에서 배열 비구조화 할당으로 사용
    return [value, handleChange];
}

// SignUp 컴포넌트
function SignUp() {
    // react-router-dom의 useNavigate 훅을 사용해 네비게이션을 위한 navigate 함수를 가져옴
    const navigate = useNavigate();

    // useInput 훅을 활용하여 상태(state)와 이벤트 핸들러 생성
    // 각각의 useInput 호출은 input 요소의 값과 변경 이벤트 핸들러 생성
    const [email, setEmail] = useInput(''); // 이메일 입력 상태와 이벤트 핸들러
    const [password, setPassword] = useInput(''); // 비밀번호 입력 상태와 이벤트 핸들러
    const [passwordConfirm, setPasswordConfirm] = useInput(''); // 비밀번호 확인 입력 상태와 이벤트 핸들러
    const [name, setName] = useInput(''); // 닉네임 입력 상태와 이벤트 핸들러
    const [emailValid, setEmailValid] = useState(null); // 이메일 유효성 검사 결과를 저장하는 상태
    const [passwordValid, setPasswordValid] = useState(null); // 비밀번호 유효성 검사 결과를 저장하는 상태

    // useEffect를 사용하여 이메일 및 비밀번호 유효성 검사
    useEffect(() => {
        // 이메일이 비어있지 않은 경우
        if (email !== '') {
            // 정규 표현식을 사용해 이메일 유효성 검사 결과 setEmailValid 상태에 저장
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            setEmailValid(emailRegex.test(email));
        } else {
            // 이메일이 비어있는 경우 setEmailValid 상태 null로 설정
            setEmailValid(null);
        }
        // 비밀번호가 비어있지 않은 경우
        if (password !== '') {
            // 정규 표현식을 사용해 비밀번호 유효성 검사 결과 setPasswordValid 상태에 저장
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
            setPasswordValid(passwordRegex.test(password));
        } else {
            // 비밀번호가 비어있는 경우 setPasswordValid 상태 null로 설정
            setPasswordValid(null);
        }
    }, [email, password]);

    // navigateToLogin 함수
    const navigateToLogin = () => {
        navigate('/');
    };

    // signUpButton 함수: 회원가입 버튼 클릭 시 실행되는 함수
    const signUpButton = async () => {
        // 입력 필드 중 빈 값이 있는 경우 경고 메시지 출력 후 함수 종료
        if (email === '' || password === '' || passwordConfirm === '' || name === '') {
            alert('빈칸을 모두 작성해주세요');
            return;
        }
        // 이메일 및 비밀번호 유효성 검사 결과 확인
        if (!emailValid || !passwordValid) {
            alert('입력한 정보를 다시 확인해주세요');
            return;
        }

        try {
            // API를 통한 회원가입 요청
            const response = await api.post('/api/member/signup', {
                name: name,
                email: email,
                password: password,
            });
            // 회원가입 성공 시
            if (response.status === 201) {
                alert('회원가입이 완료되었습니다.');
                navigateToLogin();
            }
        } catch (error) {
            // 오류 발생 시 처리
            if (error.response) {
                const statusCode = error.response.status;
                const errorMessage = error.response.data.message;
                // 오류 상태 코드 400일 경우
                if (statusCode === 400) {
                    alert(errorMessage);
                }
            }
        }
    };

    // JSX로 화면 구성
    return (
        <StBody>
            <LoginDiv>
                <LogoDiv onClick={() => navigate('/')}>
                    <LogoImg />
                </LogoDiv>
                <InputDiv>
                    <form
                        onSubmit={(e) => {
                            // 폼 제출(submit) 이벤트 핸들러
                            e.preventDefault(); // 기본 제출 동작을 방지하여 페이지 새로고침 방지
                            signUpButton(); // 회원가입 버튼 클릭 시 실행되는 함수 호출
                        }}
                    >
                        {/*이메일 입력 필드*/}
                        <InputTag
                            type="text" // 입력 타입: 텍스트
                            value={email} // 입력 값: 현재 이메일 상태 값
                            onChange={setEmail} // 입력 값 변경 시 호출될 이벤트 핸들러 설정 (이메일 상태를 업데이트하는 함수)
                            placeholder="이메일" // 입력란에 나타날 플레이스홀더(안내 문구)
                        />
                        {/*이메일 유효성 메시지*/}
                        {emailValid === null ? null : emailValid ? (
                            // 이메일 유효성이 null이면 결과를 나타내지 않음
                            // 이메일 유효성이 true이면 '사용 가능합니다' 메시지를 녹색으로 표시
                            <StSpan color="green">사용 가능합니다</StSpan>
                        ) : (
                            // 이메일 유효성이 false이면 '이메일 형식이 아니예요' 메시지를 빨간색으로 표시
                            <StSpan color="red">이메일 형식이 아니예요</StSpan>
                        )}
                        {/*비밀번호 입력 필드*/}
                        <InputTag
                            type="password"
                            value={password}
                            onChange={setPassword}
                            placeholder="비밀번호 (8자 이상)"
                        />
                        {/*비밀번호 유효성 메시지*/}
                        {passwordValid === null ? null : passwordValid ? (
                            <StSpan color="green">사용 가능합니다</StSpan>
                        ) : (
                            <StSpan color="red">비밀번호는 대/소문자/특수문자를 포함하여 8자 이상 가능해요</StSpan>
                        )}
                        {/* 비밀번호 확인 입력 필드 */}
                        <InputTag
                            type="password"
                            value={passwordConfirm}
                            onChange={setPasswordConfirm}
                            placeholder="비밀번호 확인(8자 이상)"
                        />
                        {/*비밀번호 확인 유효성 메시지*/}
                        {password === passwordConfirm ? passwordValid : null ? (
                            <StSpan color="green">비밀번호가 일치합니다</StSpan>
                        ) : (
                            <StSpan color="red">비밀번호가 달라요</StSpan>
                        )}
                        {/* 닉네임 입력 필드 */}
                        <InputTag type="text" value={name} onChange={setName} placeholder="닉네임" />
                        {/* CheckBox 컴포넌트 */}
                        <CheckBox />
                        {/* 회원가입 버튼 */}
                        <AddButton type="submit">가입하기</AddButton> 
                    </form>
                </InputDiv>
            </LoginDiv>
        </StBody>
    );
}

export default SignUp;

// 스타일 컴포넌트
/* ... (백그라운드 및 기본 스타일) */
export const StBody = styled.div`
    display: block; // div 요소의 display를 block으로 설정
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    background-color: #eae7de;
    font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;

    display: flex;
    flex-direction: column;
    padding-top: 55px;
    align-items: center;
`;
/* ... (로그인 영역 스타일) */
export const LoginDiv = styled.div`
    flex-direction: column;
`;
/* ... (로고 스타일) */
export const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
`;
/* ... (로고 이미지 스타일) */
export const LogoImg = styled.div`
    width: 240px;
    height: 60px;

    background: url('/img/Logo.png');

    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;
/* ... (입력 영역 스타일) */
export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 30px;

    width: 400px;
    height: 400px;
`;
/* ... (입력 필드 스타일) */
export const InputTag = styled.input`
    width: 94%;
    height: 10%;

    margin-top: 14px;
    padding-left: 20px;
    font-weight: 700;
`;
/* ... (체크박스 영역 스타일) */
export const CheckBoxDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
`;
/* ... (체크박스 스타일) */
export const Checkbox = styled.input`
    margin-right: 10px;
    width: 17px;
    height: 56px;
    accent-color: black;
`;
/* ... (폰트 스타일) */
export const FontSize5 = styled.h5`
    font-size: 13px;
    font-weight: 500;
`;
/* ... (링크 스타일) */
export const StLink = styled(Link)`
    margin-top: 23px;
    margin-left: auto;
    font-size: 13px;
    font-weight: 600;
    color: black;
    &:hover {
        cursor: pointer;
    }
`;
/* ... (가입 버튼 스타일) */
export const AddButton = styled.button`
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 50px;
    padding: 10px;
    margin-top: 60px;

    background-color: rgb(206, 205, 205);

    border: none;
    border-radius: 5px;

    color: #4c4c4c;
    font-size: 14px;
    font-weight: 500;

    &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
`;
/* ... (색상 및 폰트 크기 스타일) */
export const StSpan = styled.span`
    color: ${(props) => props.color};
    font-size: 11px;
`;

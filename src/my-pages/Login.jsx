import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { api } from '../axios/api';

// useInput 훅
// 입력 요소의 값을 관리하는 커스텀 훅
// initialValue: 초기 값으로, 기본값은 빈 문자열
function useInput(initialValue = '') {
    // useState 훅을 사용하여 현재 입력 값과 값을 업데이트하는 함수 생성
    const [value, setValue] = useState(initialValue);
    // input 요소의 값이 변경될 때 호출되는 이벤트 핸들러 함수
    const handleChange = (e) => {
        // 입력 값이 변경될 때마다 해당 값을 상태에 업데이트
        setValue(e.target.value);
    };
    // 현재 입력 값과 이벤트 핸들러 함수를 배열로 반환
    // 이 배열을 구조 분해하여 컴포넌트에서 사용
    return [value, handleChange];
}

// Login 컴포넌트
function Login() {
    const navigate = useNavigate();

    // useInput 훅을 활용하여 state 및 이벤트 핸들러 생성
    // email 상태와 이벤트 핸들러 setEmail 정의
    const [email, setEmail] = useInput('');
    // password 상태와 이벤트 핸들러 setPassword 정의
    const [password, setPassword] = useInput('');

    // 로그인 버튼 클릭 시 실행되는 loginButton 함수
    const loginButton = async () => {
        try {
            // 아이디 또는 비밀번호가 빈 경우 알림을 표시하고 함수 종료
            if (email === '' || password === '') {
                alert('아이디와 비밀번호를 입력해주세요');
                return;
            }
            // 서버에 로그인 요청 후 응답 처리
            const response = await api.post('/api/login', {
                email: email,
                password: password,
            });
            // 응답 로그를 콘솔에 출력
            console.log(response);

            // 로그인 성공 시 서버에서 반환한 토큰을 쿠키에 저장
            Cookies.set('Authorization', response.data.token);

            // 응답 상태가 200이면 로그인 완료 메시지를 표시하고 메인 페이지로 이동
            if (response.status === 200) {
                alert('로그인이 완료되었습니다.');
                navigate('/');
            }
        } catch (error) {
            // 서버 응답 오류 처리
            if (error.response) {
                const statusCode = error.response.status;
                const errorMessage = error.response.data.message;
                // 상태 코드가 404이면 오류 메시지를 알림으로 표시
                if (statusCode === 404) {
                    alert(errorMessage);
                }
            }
            // 그 외의 오류는 일반적인 알림으로 표시
            alert(error);
        }
    };

    const KakaoLogin = () => {
        // Redirect the user to the Kakao OAuth URL
        window.location.href =
            'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=671600df764bdd2a2198446875a85121&redirect_uri=https://www.neeks.shop/api/kakao/callback&response_type=code';
        // Cookies.set('token', response.data.token);
        // // 쿠키 저장하는 코드!
        if(Cookies.get('Authorization')){
            navigate('/');
        }
    };

    const GoogleLogin = () => {
        // Redirect the user to the Kakao OAuth URL
        window.location.href =
            'https://accounts.google.com/o/oauth2/v2/auth?client_id=20851922201-isrde3fhu3j87nmrhl8ueivo9pifbgdb.apps.googleusercontent.com&redirect_uri=https://www.neeks.shop/api/login/oauth2/code/google&response_type=code&scope=email profile';
        // // 쿠키 저장하는 코드!
        if(Cookies.get('Authorization')){
            navigate('/');
        }
    };


    useEffect(() => {
        const token = Cookies.get('Authorization');
        if (token) {
            navigate('/');
        } else 
        console.log('+++');
    }, []);

    // JSX로 화면 구성
    return (
        <StBody>
            <LoginDiv>
                <LogoDiv onClick={() => navigate('/')}>
                    <LogoImg />
                </LogoDiv>
                <InputDiv>
                    {/* Kakao 로그인 버튼 */}
                    <KakaoButton onClick={KakaoLogin}>
                        <GoogleImg src="/img/Kakao.jpg" alt="logo" />
                        카카오로 시작하기
                    </KakaoButton>
                    {/* Google 로그인 버튼 */}
                    <GoogleButton onClick={GoogleLogin}>
                        <GoogleImg src="/img/GoogleLogo.png" alt="logo" />
                        구글로 시작하기
                    </GoogleButton>
                    <Hr />
                    <form
                        onSubmit={(e) => {
                            // 폼 제출(submit) 이벤트 핸들러
                            e.preventDefault(); // 기본 제출 동작을 방지하여 페이지 새로고침 방지
                            loginButton(); // 로그인 버튼 클릭 시 실행되는 함수 호출
                        }}
                    >
                        {/* 이메일 입력 필드 */}
                        <InputTag
                            type="text" // input 태그의 type 속성, 여기서는 텍스트 입력 필드를 나타냄
                            value={email} // input 태그의 현재 값으로 상태(email)를 연결하여 표시
                            onChange={setEmail} // input 값이 변경될 때 호출되는 이벤트 핸들러, setEmail 함수를 연결
                            placeholder="이메일" // 입력 필드에 표시되는 힌트 텍스트
                        ></InputTag>
                        <InputTag
                            type="password"
                            value={password}
                            onChange={setPassword}
                            placeholder="비밀번호"
                        ></InputTag>
                        {/* 비밀번호 찾기 링크 */}
                        <StLink1 to={`/signup`}>
                            비밀번호를 잊으셨나요? {/* '비밀번호를 잊으셨나요?' 텍스트를 표시하는 링크 */}
                        </StLink1>
                        {/* 로그인 버튼 */}
                        <AddButton type="submit">로그인</AddButton>
                        <CheckBoxDiv>
                            {/* 회원가입 링크 */}
                            <StLink2 to={`/signup`}>회원가입하기</StLink2>
                        </CheckBoxDiv>
                    </form>
                </InputDiv>
            </LoginDiv>
        </StBody>
    );
}

export default Login;

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
    padding-top: 100px;
    align-items: center;
`;
/* ... (로그인 영역 스타일) */
export const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
/* ... (로고 스타일) */
export const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
`;
/* ... (로고 이미지 스타일) */
export const LogoImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 240px;
    height: 100px;

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
    align-items: center;

    width: 400px;
    height: 190px;

    margin-top: 110px;
`;
/* ... (입력 필드 스타일) */
export const InputTag = styled.input`
    width: 94%;
    height: 18%;

    margin-top: 10px;
    margin-bottom: 14px;
    padding-left: 20px;
    font-weight: 700;
`;
/* ... (체크박스 디테일 영역 스타일) */
export const CheckBoxDetailDiv = styled.div`
    display: flex;
    flex-direction: column;

    width: 391px;
    margin-bottom: 70px;
`;
/* ... (체크박스 영역 스타일) */
export const CheckBoxDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
`;
/* ... (링크1 스타일) */
export const StLink1 = styled(Link)`
    margin-top: 50px;
    margin-right: auto;
    font-size: 14px;
    font-weight: 600;
    color: black;
    &:hover {
        cursor: pointer;
    }
`;
/* ... (링크2 스타일) */
export const StLink2 = styled(Link)`
    margin-top: 15px;
    margin-left: 165px;
    font-size: 14px;
    font-weight: 600;
    color: black;
    &:hover {
        cursor: pointer;
    }
`;
/* ... (구글 로그인 버튼 스타일) */
export const GoogleButton = styled.button`
    display: flex;
    align-items: center;
    background-color: white;
    width: 400px;
    height: 55px;
    padding: 10px;
    padding-right: 10px;

    border-radius: 7px;

    color: black;
    font-size: 14px;
    font-weight: 600;

    margin-bottom: 20px;

    &:hover {
        color: black;
        cursor: pointer;
    }
`;
/* ... (구글 로고 이미지 스타일) */
export const GoogleImg = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 10px;
    margin-right: 10px;
`;
export const KakaoImg = styled.img`
    width: 27px;
    height: 27px;
    margin-left: 10px;
    margin-right: 10px;
`;
/* ... (카카오 로그인 버튼 스타일) */
export const KakaoButton = styled.button`
    display: flex;
    align-items: center;
    background-color: #fae101;
    width: 400px;
    height: 55px;
    padding: 10px;
    padding-right: 10px;

    border-radius: 7px;

    color: black;
    font-size: 14px;
    font-weight: 600;

    margin-bottom: 20px;

    &:hover {
        color: black;
        cursor: pointer;
    }
`;
/* ... (로그인 버튼 스타일) */
export const AddButton = styled.button`
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 50px;
    padding: 10px;

    background-color: black;

    border-radius: 7px;

    color: white;
    font-size: 15px;
    font-weight: 600;

    margin-top: 30px;
    margin-bottom: 20px;

    &:hover {
        color: gray;
        background-color: white;
        cursor: pointer;
    }
`;
/* ... (수평 선 스타일) */
export const Hr = styled.hr`
    border: 1px solid black;
    margin-bottom: 20px;
    width: 100%;
`;
// 직선 넣기

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { api } from '../axios/api';

// useInput 훅
function useInput(initialValue = '') {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return [value, handleChange];
}

// Login 컴포넌트
function Login() {
    const navigate = useNavigate();

    // useInput 훅을 활용하여 state 및 이벤트 핸들러 생성
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');

    // 로그인 버튼 클릭 시 실행되는 loginButton 함수
    const loginButton = async () => {
        try {
            if (email === '' || password === '') {
                alert('아이디와 비밀번호를 입력해주세요');
                return;
            }
            // 서버에 로그인 요청 후 응답 처리
            const response = await api.post('/api/member/login', {
                email: email,
                password: password,
            });
            console.log(response);

            // 로그인 성공 시 토큰을 쿠키에 저장
            Cookies.set('token', response.headers.authorization);

            if (response.status === 200) {
                alert('로그인이 완료되었습니다.');
                navigate('/');
            }
        } catch (error) {
            if (error.response) {
                const statusCode = error.response.status;
                const errorMessage = error.response.data.message;
                if (statusCode === 400) {
                    alert(errorMessage);
                }
            }
            alert(error);
        }
    };

    // useEffect(() => {
    //     const token = Cookies.get('token');
    //     if (token) {
    //         Navigate('/');
    //     }
    // }, []);

    // JSX로 화면 구성
    return (
        <StBody>
            <LoginDiv>
                <LogoDiv onClick={() => navigate('/')}>
                    <LogoImg />
                </LogoDiv>
                <InputDiv>
                    {/* Google 로그인 버튼 */}
                    <GoogleButton onClick={() => navigate('/signup')}>
                        <GoogleImg src="/img/GoogleLogo.png" alt="logo" />
                        구글로 시작하기
                    </GoogleButton>
                    <Hr />
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            loginButton();
                        }}
                    >
                        {/* 이메일 입력 필드 */}
                        <InputTag type="text" value={email} onChange={setEmail} placeholder="이메일"></InputTag>
                        <InputTag
                            type="password"
                            value={password}
                            onChange={setPassword}
                            placeholder="비밀번호"
                        ></InputTag>
                        {/* 비밀번호 찾기 링크 */}
                        <StLink1 to={`/signup`}>비밀번호를 잊으셨나요?</StLink1>
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
    padding-top: 150px;
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

    margin-top: 60px;
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

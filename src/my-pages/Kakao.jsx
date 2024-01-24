import React from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';

// Kakao함수 컴포넌트 // oAuthLoginHandler라는 prop을 받음.
const Kakao = ({ oAuthLoginHandler }) => {
    // 특정 API 키를 사용하려면 주석 해제
    const KAKAO_JAVASCRIPT_KEY = 'your_api_key_here';

    // KaKaoLogin 컴포넌트를 사용하여 JSX 반환
    return (
        <>
            {/* KaKaoLogin 컴포넌트와 여러 속성 */}
            <KaKaoLogin
                // 토큰 속성으로 전달
                token={KAKAO_JAVASCRIPT_KEY}
                buttonText="kakao" // 로그인 버튼에 표시할 텍스트 
                onSuccess={oAuthLoginHandler} // 로그인 성공시 호출되는 콜백 함수
                onFail={console.error} // 로그인 실패시 호출되는 콜백 함수
                onLogout={console.info} // 로그아웃시 호출되는 콜백 함수
                style={buttonBlock} // KaKaoLogin 컴포넌트에 대한 인라인 스타일
            >
                {/* KaKaoLogin 내부에 있는 사용자 정의 스타일이 적용된 버튼 */}
                <ButtoninnerText>카카오 계정으로 로그인</ButtoninnerText>
            </KaKaoLogin>
        </>
    );
};

export default Kakao;

// buttonBlock에 사용된 스타일드 컴포넌트, KaKaoLogin 내부에서 인라인 스타일 사용
export const buttonBlock = styled.button`
    border: 'none';
    border-radius: '9px';
    font-size: '17px';
    width: '284px';
    font-weight: '500';
    height: '32px';
    cursor: 'pointer';
    background: '#fae101';
    align-items: 'center';
    display: 'flex';
    justify-content: 'center';
    padding: '4px 0px';
`;

// 사용자 정의 스타일이 적용된 버튼 텍스트에 사용된 스타일드 컴포넌트
export const ButtoninnerText = styled.h3`
    margin: 0;
    font-size: 14px;
`;

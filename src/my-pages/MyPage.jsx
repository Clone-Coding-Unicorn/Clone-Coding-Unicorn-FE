import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { api } from '../axios/api';

// MyPage 컴포넌트
function MyPage() {
    // mypageData state 정의 및 초기값 설정
    const [mypageData, setMypageData] = useState({
        name: 'LEE HYUN JIN',
        email: 'web.creastory@gmail.com',
        emoji: '🦔',
    });

    // 서버에서 사용자 정보를 가져오는 함수
    const getMypage = async () => {
        try {
            const response = await api.get(`/api/user/profile`);

            // 서버에서 받아온 사용자 정보로 state 업데이트
            setMypageData({
                name: response.data.name,
                email: response.data.email,
                emoji: response.data.emoji,
            });
        } catch (error) {
            // 오류 처리 부분 (주석 처리된 부분은 필요에 따라 사용 가능)
            // if (error.response) {
            // const statusCode = error.response.status;
            // const errorMessage = error.response.data.message;
            // if (statusCode === 404) {
            //     alert(errorMessage);
            // }
            // }
        }
    };

    // 컴포넌트가 마운트될 때 한 번만 실행되는 useEffect
    useEffect(() => {
        // const token = Cookies.get('token');
        // 서버에서 사용자 정보를 가져오는 함수 호출
        getMypage();
    }, []);

    // JSX로 화면 구성
    return (
        <StBody>
            <MypageDiv>
                        <MypageContainer>
                            {/* 사용자 인사 및 닉네임, 이모지, 뉴니커 표시 */}
                            <MypageH1 fw="400">반가워 죽겠슴,</MypageH1>
                            <NickNameDiv>
                                <MypageH1 fw="700">{mypageData.name}</MypageH1>
                                <EmojiImg>{mypageData.emoji}</EmojiImg>
                                <MypageH1 fw="700">뉴니커!</MypageH1>
                            </NickNameDiv>
                            {/* 이메일 표시 */}
                            <MypageH2>{mypageData.email}</MypageH2>
                        </MypageContainer>
                        {/* 프로필 설정 링크 */}
                <StLink to={`/profile`}>프로필 설정하기</StLink>
            </MypageDiv>
        </StBody>
    );
}

export default MyPage;

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

    background-size: cover;
    background-repeat: no-repeat;

    background-color: #eae7de;
    font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;

    display: flex;
    flex-direction: column;
    padding-top: 150px;
    align-items: center;
`;
/* ... (마이페이지 영역 스타일) */
export const MypageDiv = styled.div`
    width: 1360px;
    height: 200px;
`;
/* ... (마이페이지 컨테이너 스타일) */
export const MypageContainer = styled.div`
    height: 140px;
    margin-bottom: 40px;
    line-height: 0.5;
`;
/* ... (닉네임 디자인 스타일) */
export const NickNameDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
/* ... (H1 태그 스타일) */
export const MypageH1 = styled.h1`
    font-size: 35px;
    font-weight: ${(props) => props.fw};
`;
/* ... (H2 태그 스타일) */
export const MypageH2 = styled.h2`
    font-size: 15px;
    font-weight: 600;
`;
/* ... (이모지 이미지 스타일) */
export const EmojiImg = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    font-size: 30px; // 이모지 크기
`;
/* ... (링크 스타일) */
export const StLink = styled(Link)`
    margin-top: 30px;
    margin-right: auto;
    font-size: 14px;
    font-weight: 600;
    color: black;
    &:hover {
        cursor: pointer;
    }
`;

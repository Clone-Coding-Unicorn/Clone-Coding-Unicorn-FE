import React from 'react';
import styled from 'styled-components';

// MyPage 컴포넌트
function MyPage3() {

    // JSX로 화면 구성
    return (
        <StBody>
            <MypageDiv>
                <MypageContainer>
                    {/* 사용자 인사 및 닉네임, 이모지, 뉴니커 표시 */}
                    <MypageH1 fw="500">🛒 주문 내역</MypageH1>
                    <NickNameDiv>
                        <MypageH3 fw="500" ml="5px">결제, 환불은 고객센터에 문의해주세요.</MypageH3>
                    </NickNameDiv>
                </MypageContainer>
                {/* 프로필 설정 링크 */}
            </MypageDiv>
        </StBody>
    );
}

export default MyPage3;

// 스타일 컴포넌트
/* ... (백그라운드 및 기본 스타일) */
export const StBody = styled.div`
    background-size: cover;
    background-repeat: no-repeat;

    /* display: block; // div 요소의 display를 block으로 설정 */
    /* position: fixed; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* z-index: -1; */

    display: flex;
    flex-direction: column;
    padding-top: 200px;

    align-items: center;
`;
/* ... (마이페이지 영역 스타일) */
export const MypageDiv = styled.div`
    width: 1360px;
    /* height: 200px; */
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
    font-size: 30px;
    font-weight: ${(props) => props.fw};
`;
/* ... (H3 태그 스타일) */
export const MypageH3 = styled.h3`
    font-size: 15px;
    font-weight: ${(props) => props.fw};
    margin-top: ${(props) => props.mt};
    margin-right: ${(props) => props.mr};
    margin-left: ${(props) => props.ml};
    margin-bottom: ${(props) => props.mb};
`;


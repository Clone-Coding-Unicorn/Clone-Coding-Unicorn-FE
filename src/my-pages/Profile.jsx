import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { api } from '../axios/api';

// Profile 컴포넌트
function Profile() {
    const navigate = useNavigate();
    // mypageData state 정의 및 초기값 설정
    const [profileData, setProfileData] = useState({
        // 사용자 정보의 초기값 설정
        email: 'web.creastory@gmail.com', // 이메일
        password: '••••••••', // 비밀번호
        name: 'LEE.HYUNJIN', // 닉네임
        birthYear: '출생년도', // 출생년도
        gender: '성별', // 성별
        emoji: '🦔', // 이모지
        job: '직업', // 직업
        interestArea: '관심분야', // 관심분야
        deleteMember: true || false, // 회원 삭제 여부
        subscribeAgree: true || false, // 구독 동의 여부
    });
    // 서버에서 사용자 정보를 가져오는 함수
    const getProfile = async () => {
        try {
            // 서버로부터 사용자 프로필 정보 요청
            const response = await api.get(`/api/profile`);
            // 서버에서 받아온 사용자 정보로 state 업데이트
            console.log(response)
            setProfileData({
                email: response.data.email,         // 이메일 업데이트
                password: response.data.password,   // 비밀번호 업데이트
                name: response.data.name,           // 닉네임 업데이트
                emoji: response.data.emoji,         // 이모지 업데이트
            });
            // 프로필 수정이 완료되면 알림창 표시 및 홈페이지로 이동
            if (response.status === 201) {
                alert('프로필 수정이 완료되었습니다.');
            }
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

    const logout = () => {
        Cookies.remove('token');
    };
    // 컴포넌트가 마운트될 때 한 번만 실행되는 useEffect
    useEffect(() => {
        Cookies.get('token');
        // 서버에서 사용자 정보를 가져오는 함수 호출
        getProfile();
    }, []);
    // JSX로 화면 구성
    return (
        <StBody>
            <ProfileDiv>
                <ProfileHeadDiv>
                    {/* 사용자에게 환영하는 메시지 */}
                    <MypageH1 fw="400">{profileData.name} 뉴니커,</MypageH1>
                    <MypageH1 fw="400">어떤 사람인지 더 알고 싶슴!</MypageH1>
                </ProfileHeadDiv>
                <>
                    {/* 뉴니커 정보 섹션 */}
                    <MypageH2>뉴니커 정보</MypageH2>
                    <InputDiv>
                        {/* 닉네임 정보 표시 */}
                        <MypageH3 fw="500" ml="30px" mr="100px">
                            닉네임
                        </MypageH3>
                        <MypageH3 fw="500">{profileData.name}</MypageH3>
                        <MypageH3 fw="500" ml="auto" mr="30px">
                            ➡
                        </MypageH3>
                    </InputDiv>
                    {/* 닉네임 변경 입력창 (호버 상태) */}
                    <InputHoverDiv>
                        <MypageH3 fw="500" ml="30px" mr="100px" mb="85px">
                            닉네임
                        </MypageH3>
                        <InputButtonDiv>
                            <InputTag type="text" />
                            <ButtonDiv>
                                <ChangeBtn>변경하기</ChangeBtn>
                                <CancleBtn onClick={() => navigate('/profile')}>취소</CancleBtn>
                            </ButtonDiv>
                        </InputButtonDiv>
                    </InputHoverDiv>

                    <InputDiv>
                        <MypageH3 fw="500" ml="30px" mr="85px">
                            출생년도
                        </MypageH3>
                        <MypageH3 fw="500">고슴이는 두살인데 {profileData.name} 뉴니커는 몇살이슴</MypageH3>
                        <MypageH3 fw="500" ml="auto" mr="30px">
                            ➡
                        </MypageH3>
                    </InputDiv>
                    <InputDiv>
                        <MypageH3 fw="500" ml="30px" mr="112px">
                            성별
                        </MypageH3>
                        <MypageH3 fw="500">고슴이는 성별을 밝히고 싶지 않슴!</MypageH3>
                        <MypageH3 fw="500" ml="auto" mr="30px">
                            ➡
                        </MypageH3>
                    </InputDiv>
                    <InputDiv>
                        <MypageH3 fw="500" ml="30px" mr="100px">
                            배송지
                        </MypageH3>
                        <MypageH3 fw="500">{profileData.name}</MypageH3>
                    </InputDiv>

                    <MypageH4 mt="20px">데스크탑에서 이모지는 여기에서 복사 붙여넣기!</MypageH4>
                    <InputDiv>
                        <MypageH3 fw="500" ml="30px" mr="80px">
                            이모지
                        </MypageH3>
                        <EmojiImg>{profileData.emoji}</EmojiImg>
                        <MypageH3 fw="500" ml="auto" mr="30px">
                            ➡
                        </MypageH3>
                    </InputDiv>
                    <InputDiv>
                        <MypageH3 fw="500" ml="30px" mr="115px">
                            직업
                        </MypageH3>
                        <MypageH3 fw="500">IT/스타트업</MypageH3>
                        <MypageH3 fw="500" ml="auto" mr="30px">
                            ➡
                        </MypageH3>
                    </InputDiv>
                    <InputDiv>
                        <MypageH3 fw="500" ml="30px" mr="85px">
                            관심분야
                        </MypageH3>
                        <MypageH3 fw="500">고슴이는 리액트에 관심있슴!</MypageH3>
                        <MypageH3 fw="500" ml="auto" mr="30px">
                            ➡
                        </MypageH3>
                    </InputDiv>

                    {/* 비밀번호 변경 입력창 */}
                    <MypageH2>비밀번호 변경</MypageH2>
                    <InputDiv>
                        <MypageH3 fw="500" ml="30px" mr="90px">
                            비밀번호
                        </MypageH3>
                        <MypageH3 fw="500" type="password">
                            {profileData.password}
                        </MypageH3>
                        <MypageH3 fw="500" ml="auto" mr="30px">
                            ➡
                        </MypageH3>
                    </InputDiv>

                    {/* 이메일 수신 정보 표시 */}
                    <MypageH2>이메일 수신여부</MypageH2>
                    <InputDiv>
                        <MypageH3 fw="500" ml="30px" mr="100px">
                            이메일
                        </MypageH3>
                        <MypageH3 fw="500">{profileData.email}</MypageH3>
                    </InputDiv>
                    {/* 뉴스레터 수신 정보 표시 */}
                    <InputDiv>
                        <MypageH3 fw="500" ml="30px" mr="55px">
                            시사 뉴스레터
                        </MypageH3>
                        <MypageH3 fw="500">스위치</MypageH3>
                    </InputDiv>
                </>
                {/* 로그아웃 및 계정 삭제 링크 */}
                <LogOuter>
                    <StLink to={`/`} onClick={logout}>로그아웃</StLink>
                    <StLink to={`/login`}>계정 삭제하기</StLink>
                </LogOuter>
            </ProfileDiv>
        </StBody>
    );
}

export default Profile;

// 스타일 컴포넌트
/* ... (백그라운드 및 기본 스타일) */
export const StBody = styled.div`
    display: block; // div 요소의 display를 block으로 설정
    /* position: fixed; */
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
    padding-top: 10px;
    align-items: center;
`;
/* ... (프로필 영역 스타일) */
export const ProfileDiv = styled.div`
    width: 1360px;
    height: 1160px;
`;
/* ... (프로필 헤더 스타일) */
export const ProfileHeadDiv = styled.div`
    height: 70px;
    line-height: 0.7;
`;
/* ... (H1 태그 스타일) */
export const MypageH1 = styled.h1`
    font-size: 35px;
    font-weight: ${(props) => props.fw};
`;
/* ... (H2 태그 스타일) */
export const MypageH2 = styled.h2`
    margin-top: 40px;
    font-size: 20px;
    font-weight: 600;
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
/* ... (H4 태그 스타일) */
export const MypageH4 = styled.h4`
    font-size: 12px;
    font-weight: 400;
    margin-top: ${(props) => props.mt};
`;
/* ... (입력 창 스타일) */
export const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    height: 70px;
`;
/* ... (입력 창 호버 상태 스타일) */
export const InputHoverDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    height: 145px;
`;
/* ... (입력 태그 스타일) */
export const InputTag = styled.input`
    width: 210px;
    height: 45px;

    margin-top: 10px;
    margin-bottom: 14px;
    padding-left: 20px;
    font-weight: 700;
`;
/* ... (입력 창 버튼 스타일) */
export const InputButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
/* ... (버튼 영역 스타일) */
export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
/* ... (변경 버튼 스타일) */
export const ChangeBtn = styled.button`
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 50px;
    padding: 10px;

    background-color: black;

    border-radius: 7px;

    color: white;
    font-size: 15px;
    font-weight: 600;

    margin-bottom: 10px;
    margin-right: 10px;

    &:hover {
        color: black;
        background-color: white;
        cursor: pointer;
    }
`;
/* ... (취소 버튼 스타일) */
export const CancleBtn = styled.button`
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 50px;
    padding: 10px;

    background-color: #eae7de;
    border: none;
    border-radius: 7px;

    color: #605f5f;
    font-size: 15px;
    font-weight: 600;

    margin-bottom: 10px;

    &:hover {
        color: #605f5f;
        background-color: #eae7de;
        border: 1px solid black;
        cursor: pointer;
    }
`;
/* ... (이모지 이미지 스타일) */
export const EmojiImg = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    font-size: 25px; // 이모지 크기
`;
/* ... (로그아웃 영역 스타일) */
export const LogOuter = styled.div`
    margin-top: 30px;
    flex-direction: row;
    align-items: center;
    height: 30px;
`;
/* ... (링크 스타일) */
export const StLink = styled(Link)`
    margin-right: 15px;
    font-size: 15px;
    font-weight: 600;
    color: black;
    &:hover {
        cursor: pointer;
    }
`;

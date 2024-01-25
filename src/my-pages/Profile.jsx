import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { api } from '../axios/api';
import ProfileValue from './ProfileValue';
import ProfilePassword from './SettingPassword';
import Subscribe from './Subscribe';

// Profile 컴포넌트
function Profile() {
    const [subscribeToggle, setSubscribeToggle] = useState();
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
            console.log(response);
            setProfileData({
                email: response.data.email, // 이메일 업데이트
                password: response.data.password, // 비밀번호 업데이트
                name: response.data.name, // 닉네임 업데이트
                emoji: response.data.emoji, // 이모지 업데이트
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
        Cookies.remove('Authorization');
    };
    // 컴포넌트가 마운트될 때 한 번만 실행되는 useEffect
    useEffect(() => {
        Cookies.get('Authorization');
        // 서버에서 사용자 정보를 가져오는 함수 호출
        getProfile();
    }, []);
    // JSX로 화면 구성
    return (
        <Section>
            <Header>
                <h1 className="setting-head-title">프로필 설정</h1>
                <p className="setting-head-description">
                    {profileData.name} 뉴니커,
                    <br />
                    어떤 사람인지 더 알고 싶어요!
                </p>
            </Header>
            <ProfileDiv>
                <>
                    {/* 뉴니커 정보 섹션 */}
                    <MypageH2>뉴니커 정보</MypageH2>
                    <ProfileValue
                        title="닉네임"
                        data={profileData.name}
                        onChange={(value) => setProfileData(value)}
                        request="name"
                    />
                    <ProfileValue title="출생년도" data={`고슴이는 두살인데 ${profileData.name} 뉴니커는 몇 살이슴`} />
                    <ProfileValue title="성별" data="고슴이는 성별을 밝히고 싶지 않슴!" />
                    <DivRow style={{ cursor: 'default' }}>
                        <h2 className="setting-row-label">배송지</h2>
                        <DivValue>{profileData.name}</DivValue>
                    </DivRow>

                    <small style={{ display: 'block', margin: '2rem 0px 0.5rem' }}>
                        데스크탑에서 이모지는{' '}
                        <a href="https://emojipedia.org/unicode-8.0/" target="_blank" rel="noopener noreferrer">
                            여기에서
                        </a>{' '}
                        복사 붙여넣기!
                    </small>

                    <DivRow style={{ cursor: 'pointer' }}>
                        <h2 className="setting-row-label">이모지</h2>
                        <DivValue>
                            <div style={{ fontSize: '1.5rem' }}>🦔</div>
                        </DivValue>
                        <span className="setting-row-change">
                            <i className="icon-arrow"></i>
                        </span>
                    </DivRow>

                    <ProfileValue title="직업" />
                    <ProfileValue title="관심분야" data={'고슴이는 밀웜에 관심있슴!'} />

                    <MypageH2>비밀번호 변경</MypageH2>

                    <ProfilePassword title={'비밀번호'} />

                    {/* 이메일 수신 정보 표시 */}
                    <MypageH2>이메일 수신여부</MypageH2>
                    <DivRow style={{ cursor: 'default' }}>
                        <h2 className="setting-row-label">이메일</h2>
                        <DivValue>{profileData.email}</DivValue>
                    </DivRow>

                    <Subscribe isSubscribe={subscribeToggle} onChange={() => setSubscribeToggle((cur) => !cur)} />
                </>
                {/* 로그아웃 및 계정 삭제 링크 */}
                <LogOuter>
                    <StLink to={`/`} onClick={logout}>
                        로그아웃
                    </StLink>
                    <StLink to={`/login`}>계정 삭제하기</StLink>
                </LogOuter>
            </ProfileDiv>
        </Section>
    );
}

export default Profile;

// 스타일 컴포넌트
/* ... (프로필 영역 스타일) */
export const ProfileDiv = styled.div`
    width: 1340px;
    height: 1600px;
`;
/* ... (프로필 헤더 스타일) */
export const ProfileHeadDiv = styled.div`
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
    flex-direction: column;
    align-items: center;
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
// 추가 스타일
export const Section = styled.section`
    max-width: 1300px;
    margin: 2rem auto 8rem;
    padding: 0 5%;

    h1 {
        display: none;
    }

    p {
        margin: 1rem 0 0;
        font-size: 2.5rem;
        font-weight: 300;
        letter-spacing: -0.025rem;
        line-height: 1.4;
    }

    .setting-body {
        margin: 4rem 0 0;
    }

    .setting-body h2 {
        margin: 0 0 2rem;
        font-size: 1.25rem;
    }

    .setting-row-label {
        width: 7rem;
    }

    .setting-row-value {
        width: calc(100% - 7rem);
    }

    .setting-row-value-username {
        width: 100%;
    }

    .setting-row-value-address {
        width: 100%;
        margin: -0.25rem 0;
        line-height: 1.5;
    }

    .setting-row-value-phone {
        width: 100%;
    }

    .switch {
        display: block;
        position: relative;
    }

    input[type='checkbox'] {
        width: 0;
        height: 0;
        opacity: 0;
        -webkit-appearance: checkbox;
        position: absolute;
        outline: auto;
    }

    input[type='checkbox'][role='switch'] + label {
        display: block;
        height: 24px;
        padding-left: 64px;
        cursor: pointer;
    }

    input[type='checkbox'] + label {
        display: block;
        height: 16px;
        padding-left: 2rem;
        line-height: 16px;
        position: relative;
    }

    input[type='checkbox'][role='switch'] + label::before {
        content: '';
        display: block;
        width: 48px;
        height: 24px;
        border: 1px solid #051619;
        border-radius: 20px;
        box-sizing: border-box;
        background: #ccc;
        position: absolute;
        left: 0;
        top: 0;
        transition: background 0.2s;
    }

    input[type='checkbox'][role='switch'] + label::after {
        content: '';
        display: block;
        width: 16px;
        height: 16px;
        border: none;
        border-radius: 50%;
        background: #fff;
        position: absolute;
        left: 4px;
        top: 4px;
        transition: left 0.2s;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
`;

export const DivRow = styled.div`
    margin: -1px calc(-2rem - 2px) 0;
    display: -webkit-flex;
    display: flex;
    margin-top: -1px;
    padding: 1rem 1rem;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid #051619;
    cursor: pointer;
    position: relative;
`;

export const DivValue = styled.div`
    width: calc(100% - 7rem);
`;
const Header = styled.header`
    margin: 4rem 0 2rem;

    .setting-head-title {
        font-size: 3rem;
        font-weight: 300;
        letter-spacing: -0.025rem;
        text-indent: -1px;
    }
    .setting-head-description {
        margin: 1rem 0 0;
        font-size: 2.5rem;
        font-weight: 300;
        letter-spacing: -0.025rem;
        line-height: 1.4;
    }
`;

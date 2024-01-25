import { useState } from 'react';
import styled from 'styled-components';
import { api } from '../axios/api';

// 프로필 값을 표시하고 수정할 수 있는 컴포넌트
const ProfileValue = ({ title, data, request, onChange }) => {
    // 토글 상태 및 값 상태를 설정
    const [toggle, setToggle] = useState(true);
    const [value, setValue] = useState(data);

    // 토글 상태를 변경하는 핸들러 함수
    const handleToggle = (e) => {
        if (toggle) {
            setToggle((cur) => !cur);
        }
    };

    // 데이터를 업데이트하는 함수
    const patchData = async (e) => {
        e.preventDefault();
        const requestData = {};
        requestData[request] = value; // 수정된 값을 사용

        // API 호출을 통해 데이터를 업데이트하고, 성공 시 토글을 true로 설정하고 onChange 콜백 호출
        await api.patch('/api/profile', requestData).then((res) => {
            if (res.data.success) {
                setToggle(true);
                onChange(value);
            }
        });
    };

    return (
        <DivRow onClick={handleToggle}>
            <h2 className="setting-row-label">{title}</h2>
            <DivValue>
                {/* 토글 상태에 따라 데이터를 보여주거나 폼을 보여줌 */}
                {toggle && <div style={{ fontSize: '1rem' }}>{data}</div>}
                {!toggle && (
                    <form onSubmit={patchData}>
                        <div className="textfield">
                            <input
                                type="text"
                                name="name"
                                className="textfield-input"
                                placeholder={title}
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>
                        <Footer>
                            {/* 데이터 변경을 확인하거나 취소할 수 있는 버튼들 */}
                            <ChangeBtn type="submit">
                                변경하기
                            </ChangeBtn>
                            <CancleBtn
                                type="button"
                                onClick={() => setToggle(true)}
                            >
                                취소
                            </CancleBtn>
                        </Footer>
                    </form>
                )}
            </DivValue>
            <span className="setting-row-change">
                <i className="icon-arrow"></i>
            </span>
        </DivRow>
    );
};

export default ProfileValue;

// 스타일드 컴포넌트로 스타일 정의
export const DivRow = styled.div`
    margin: -1px calc(-2rem - 2px) 0;
    display: -webkit-flex;
    padding: 1rem 1rem;
    box-sizing: border-box;
    border: 1px solid #051619;
    cursor: pointer;
    position: relative;
`;

export const DivValue = styled.div`
    form {
        display: block;
        margin-top: 0em;
    }

    .textfield {
        margin: 0 0 1rem;
        position: relative;
    }

    .textfield-input {
        display: block;
        width: 100%;
        padding: 10px 40px 11px 1.5rem;
        /* border: 1px solid #051619; */
        border-radius: 0;
        box-sizing: border-box;
        box-shadow: 0;
        font: inherit;
        color: #051619;
        transition: all 0.2s;
        outline: none;
        box-shadow: none;
    }
`;

export const Footer = styled.footer`
    display: block;

    .tertiary-button {
        display: inline-block;
        min-width: 104px;
        background: #ff6b00;
        padding: 10px 1.5rem 11px;
        border-radius: 0;
        text-align: center;
        color: #fff;
        cursor: pointer;
        position: relative;
        border-radius: 8px;
        background: none;
        border: none;
        color: #051619;
    }
`;
export const MypageH1 = styled.h1`
    font-size: 15px;
    font-weight: ${(props) => props.fw};
    margin-top: ${(props) => props.mt};
    margin-right: ${(props) => props.mr};
    margin-left: ${(props) => props.ml};
    margin-bottom: ${(props) => props.mb};
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

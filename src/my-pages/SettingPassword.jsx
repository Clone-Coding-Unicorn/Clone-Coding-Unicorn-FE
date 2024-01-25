import { useRef, useState } from 'react';
import styled from 'styled-components';
import { api } from '../axios/api';
import TextField from './TextField'; 

const ProfilePassword = ({ data, title, request }) => {
    const [toggle, setToggle] = useState(true);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);
    const [passwordAlert, setPasswordAlert] = useState('');
    const [passwordConfirmAlert, setPasswordConfirmAlert] = useState('');

    const handleToggle = (e) => {
        if (toggle) {
            setToggle((cur) => !cur);
        }
    };

    const checkValidation = () => {
        const password = passwordRef.current.value;
        const passwordConfirm = passwordConfirmRef.current.value;

        let pwAlert = '';
        let pwConfirmAlert = '';
        if (password !== passwordConfirm) {
            pwAlert = '비밀번호가 달라요.';
            pwConfirmAlert = '비밀번호가 달라요.';
        }

        if (!password) {
            pwAlert = '비밀번호를 입력해주세요.';
        } else if (password.length < 8) {
            pwAlert = '비밀번호는 8글자 이상 가능해요.';
        } else {
            pwAlert = '';
        }

        if (!passwordConfirm) {
            pwConfirmAlert = '비밀번호를 입력해주세요.';
        } else if (password.length < 8) {
            pwConfirmAlert = '비밀번호는 8글자 이상 가능해요.';
        } else {
            pwConfirmAlert = '';
        }

        setPasswordAlert(pwAlert);
        setPasswordConfirmAlert(pwConfirmAlert);

        return !pwAlert && !pwConfirmAlert;
    };

    const patchData = async (e) => {
        e.preventDefault();
        if (checkValidation()) {
            const requestData = {};
            requestData['password'] = passwordRef.current.value;
            await api.patch('/auth/mypage/profile', requestData).then((res) => {
                if (res.data.success) {
                    setToggle(true);
                }
            });
        }
    };

    return (
        <DivRow onClick={handleToggle} style={{ cursor: 'pointer' }}>
            <h2 className="setting-row-label">{title}</h2>
            <DivValue>
                {toggle && <div style={{ fontSize: '1rem' }}>••••••••</div>}
                {!toggle && (
                    <form onSubmit={patchData}>
                        <fieldset>
                            <legend aria-hidden="true" hidden={true}>
                                필수입력
                            </legend>
                            <TextField
                                type="password"
                                name="password"
                                className="textfield-input"
                                placeholder="비밀번호"
                                ref={passwordRef}
                                small={passwordAlert}
                            />
                            <TextField
                                type="password"
                                name="passwordConfirm"
                                className="textfield-input"
                                placeholder="비밀번호 확인"
                                ref={passwordConfirmRef}
                                small={passwordConfirmAlert}
                            />
                        </fieldset>

                        <Footer>
                            <button type="submit" className="setting-row-foot-confirm primary-button">
                                변경하기
                            </button>
                            <button
                                type="button"
                                className="setting-row-foot-cancel teriary-button"
                                onClick={() => setToggle(true)}
                            >
                                취소
                            </button>
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

export default ProfilePassword;

export const DivRow = styled.div`
    margin: -1px calc(-2rem - 2px) 0;
    display: -webkit-flex;
    display: flex;
    margin-top: -1px;
    padding: 1.5rem 2rem;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid #051619;
    cursor: pointer;
    position: relative;
    vertical-align: center;
`;

export const DivValue = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
        border: 1px solid #051619;
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

    .teriary-button {
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

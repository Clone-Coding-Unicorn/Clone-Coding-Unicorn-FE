import styled from 'styled-components';
import { api } from '../axios/api';

const Subscribe = ({ isSubscribe, onChange }) => {
    const handleToggleSwitch = async () => {
        const requestData = {};
        requestData['isSubscribe'] = !isSubscribe;
        await api.get('/api/profile', requestData).then((res) => {
            if (res.data.success) {
                onChange();
            }
        });
    };

    return (
        <DivRow style={{ cursor: 'default' }}>
            <h2 className="setting-row-label">시사 뉴스레터</h2>
            <DivValue>
                <span className="switch" style={{ fontSize: '1rem' }}>
                    <input
                        type="checkbox"
                        role="switch"
                        id="subscribeAgree"
                        name="subscribeAgree"
                        checked={isSubscribe}
                        onChange={() => handleToggleSwitch()}
                    />
                    <label htmlFor="subscribeAgree"></label>
                </span>
            </DivValue>
        </DivRow>
    );
};

export default Subscribe;

const DivRow = styled.div`
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
    vertical-align: center;

    .setting-row-label {
        width: 10rem;
        font-size: 1rem;
        line-height: 24px;
        color: var(--gray400);
    }
`;

const DivValue = styled.div`
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

    input[type='checkbox']:checked + label:before {
        background: #051619;
        border-color: #051619;
        -webkit-animation: ripple2 0.2s linear forwards;
        animation: ripple2 0.2s linear forwards;
    }

    input[type='checkbox'][role='switch']:checked + label:before {
        background: #ff6b00;
    }
    input[type='checkbox'] + label:before {
        content: '';
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 0;
        border: 1px solid #051619;
        box-sizing: border-box;
        background: #fff;
        position: absolute;
        left: 0;
        top: 0;
    }

    input[type='checkbox'][role='switch'] + label:after {
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

    input[type='checkbox'] + label:after {
        content: '';
        display: none;
        width: 8px;
        height: 2px;
        border-left: 2px solid #051619;
        border-bottom: 2px solid #051619;
        border-right-color: #051619;
        border-top-color: #051619;
        position: absolute;
        left: 3px;
        top: 5px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    input[type='checkbox'][role='switch']:checked + label:after {
        left: 28px;
    }

    input[type='checkbox']:checked + label:after {
        display: block;
        border-color: #fff;
    }

    input[type='checkbox'][role='switch']:checked + label {
        color: #ff6b00;
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

    input[type='checkbox'] + label:after {
        content: '';
        display: none;
        width: 8px;
        height: 2px;
        border-left: 2px solid #051619;
        border-bottom: 2px solid #051619;
        border-right-color: #051619;
        border-top-color: #051619;
        position: absolute;
        left: 3px;
        top: 5px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
`;

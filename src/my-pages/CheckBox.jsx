import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CheckBox() {
    const [allCheck, setAllCheck] = useState(false);
    const [ageCheck, setAgeCheck] = useState(false);
    const [useCheck, setUseCheck] = useState(false);
    const [infoCheck, setInfoCheck] = useState(false);
    const [marketingCheck, setMarketingCheck] = useState(false);

    const allBtnEvent = () => {
        if (allCheck === false) {
            setAllCheck(true);
            setAgeCheck(true);
            setUseCheck(true);
            setInfoCheck(true);
            setMarketingCheck(true);
        } else {
            setAllCheck(false);
            setAgeCheck(false);
            setUseCheck(false);
            setInfoCheck(false);
            setMarketingCheck(false);
        }
    };

    const ageBtnEvent = () => {
        if (ageCheck === false) {
            setAgeCheck(true);
        } else {
            setAgeCheck(false);
        }
    };

    const useBtnEvent = () => {
        if (useCheck === false) {
            setUseCheck(true);
        } else {
            setUseCheck(false);
        }
    };

    const infoBtnEvent = () => {
        if (useCheck === false) {
            setInfoCheck(true);
        } else {
            setInfoCheck(false);
        }
    };

    const marketingBtnEvent = () => {
        if (marketingCheck === false) {
            setMarketingCheck(true);
        } else {
            setMarketingCheck(false);
        }
    };

    useEffect(() => {
        if (ageCheck === true && useCheck === true && infoCheck === true && marketingCheck === true) {
            setAllCheck(true);
        } else {
            setAllCheck(false);
        }
    }, [ageCheck, useCheck, infoCheck, marketingCheck]);

    return (
        <div>
            <CheckBoxDiv>
                <Checkbox type="checkbox" id="all-check" checked={allCheck} onChange={allBtnEvent} />
                <FontSize5>모두 동의합니다</FontSize5>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <Checkbox type="checkbox" id="check1" checked={ageCheck} onChange={ageBtnEvent} />
                <FontSize5>만 14세 이상 가입 동의 (필수)</FontSize5>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <Checkbox type="checkbox" id="check2" checked={useCheck} onChange={useBtnEvent} />
                <FontSize5>이용약관 동의 (필수)</FontSize5>
                <StLink to={`/login`}>약관보기</StLink>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <Checkbox type="checkbox" id="check3" checked={infoCheck} onChange={infoBtnEvent} />
                <FontSize5>개인정보 수집/이용 동의 (필수)</FontSize5>
                <StLink to={`/login`}>약관보기</StLink>
            </CheckBoxDiv>
            <CheckBoxDiv>
                <Checkbox type="checkbox" id="check4" checked={marketingCheck} onChange={marketingBtnEvent}/>
                <FontSize5>뉴스레터 및 마케팅 정보 수신 동의 (선택)</FontSize5>
                <StLink to={`/login`}>약관보기</StLink>
            </CheckBoxDiv>
        </div>
    );
}

export default CheckBox;

export const CheckBoxDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
`;
export const Checkbox = styled.input`
    margin-right: 10px;
    width: 17px;
    height: 56px;
    accent-color: black;
`;
export const FontSize5 = styled.h5`
    font-size: 13px;
    font-weight: 500;
`;
export const StLink = styled(Link)`
    margin-top: 23px;
    margin-left: auto;
    font-size: 13px;
    font-weight: 600;
    color: black;
    &:hover {
        cursor: pointer;
    }
`;

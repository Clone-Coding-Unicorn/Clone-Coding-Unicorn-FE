import styled from "styled-components";

export const SearchContainer = styled.div`
    max-width: 640px;
    margin: 0 auto;
    padding: 1rem 5%;
    box-sizing: border-box;
    display: flex;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 6;
    input {
        padding-left: 56px;
        height: 52px;
        font-size: 1.125rem;
    }
`
export const SearchInputStyled = styled.input`
    display: block;
    width: 100%;
    padding: 10px 40px 11px 1.5rem;
    border: 1px solid #051619;
    border-radius: 0;
    box-sizing: border-box;
    box-shadow: 0;
    font: inherit;
    color: #051619;
    transition: all .2s;
    outline: none;
    box-shadow: none;
`

export const SearchClose = styled.button`
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`
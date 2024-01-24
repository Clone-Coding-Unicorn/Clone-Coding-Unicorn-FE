import styled from "styled-components";

export const PostHead = styled.div`
    margin: 0 0 4rem;
    padding: 4rem 5% 5.5rem;
    border-bottom: 1px solid #051619;
    text-align: center;
`

export const PostBody = styled.div`
    margin: 0 0 4rem;
    padding: 4rem 5% 5.5rem;
    text-align: center;
`

export const PostSubscribe = styled.div`
    max-width: 45.7142rem;
    margin: 0 auto 9rem;
    padding: 1.7857rem 1.4285rem 0;
`

export const PostSubscribeGroup = styled.div`
    display: flex;
    padding-top: 5rem;
    border-top: 1px solid black;
    justify-content: center;
`

export const PostTextfield = styled.input`
    padding: 1.3333rem;
    font-size: 1.3333rem;
    line-height: 1.1875;
    border-radius: 8px 0 0 8px;
`

export const PostSubmit = styled.button`
    display: block;
    width: 34.167%;
    padding: 1.3333rem;
    color: #fff;
    font-size: 1.3333rem;
    line-height: 1.1875;
    border: 1px solid #051619;
    border-left: 0;
    background-color: #ff6b00;
    border-radius: 0 8px 8px 0;
`

export const PostContainer = styled.div`
  position: relative;
`;

export const PostScrollWrap = styled.div`
  height: 50px;
  z-index: 100;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: fixed;
  border: 1px solid black;
  background-color: white;
  top: 0;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  
  p{
    text-align: center;
    font-weight: bold;
  }
`;

export const PostHeadProgress = styled.div`
  background: #ff6b00;
  position: absolute;
  top: 0;
  bottom: 0;
  transition: width 0.2s ease-in-out; 
  z-index: -1;
`;
import React from "react";
import { HeaderNavbarIcon, HeaderNavbarImg, HeaderNavbarInner, HeaderNavbarLeft, HeaderNavbarStyle, LoginIcon, SearchIcon, IconContainer } from "./styled/NavberStyled";
import surf from "./img/logo.png"
import searchImg from "./img/search.png"
import login from "./img/login.png"


function CustomNavbar() {
  return (
    <HeaderNavbarStyle>
      <HeaderNavbarInner>
        <HeaderNavbarLeft></HeaderNavbarLeft>
        <HeaderNavbarImg href="/">
          <img  src={surf} alt="뉴닉" />
        </HeaderNavbarImg>
        <IconContainer>
          <HeaderNavbarIcon>
            <SearchIcon src={searchImg} alt="검색" />
          </HeaderNavbarIcon>
          <HeaderNavbarIcon>
            <SearchIcon src={login} alt="로그인" />
          </HeaderNavbarIcon>
        </IconContainer>
      </HeaderNavbarInner>
    </HeaderNavbarStyle>
  );
}

export default CustomNavbar;

import React, { useState } from "react";
import { HeaderNavbarIcon, HeaderNavbarImg, HeaderNavbarInner, HeaderNavbarLeft, HeaderNavbarStyle, SearchIcon, IconContainer, NavbarUi, DropdownBox } from "./styled/NavberStyled";
import surf from "./img/logo.png"
import searchImg from "./img/search.png"
import login from "./img/login.png"


function CustomNavbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    document.documentElement.classList.toggle('invert', !isClicked);
  };
  const handleLoginIconClick = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <HeaderNavbarStyle >
      <HeaderNavbarInner>
        <HeaderNavbarLeft></HeaderNavbarLeft>
        <HeaderNavbarImg href="/">
          <img src={surf} alt="뉴닉" />
        </HeaderNavbarImg>
        <NavbarUi>
          <button onClick={handleButtonClick} >
            Click me
          </button>
        </NavbarUi>
        <IconContainer>
          <HeaderNavbarIcon>
            <SearchIcon src={searchImg} alt="검색" />
          </HeaderNavbarIcon>
          <HeaderNavbarIcon onClick={handleLoginIconClick}>
            <SearchIcon src={login} alt="로그인" />
            {showDropdown && (
              <DropdownBox>
                <a href="/mypage">마이페이지</a>
                <a href="/profile">프로필</a>
                <a href="/login">로그인</a>
              </DropdownBox>
            )}
          </HeaderNavbarIcon>
        </IconContainer>
      </HeaderNavbarInner>
    </HeaderNavbarStyle>
  );
}

export default CustomNavbar;

import React, { useState,useEffect } from "react";
import { HeaderNavbarIcon, HeaderNavbarImg, HeaderNavbarInner, HeaderNavbarLeft, HeaderNavbarStyle, SearchIcon, IconContainer, NavbarUi, DropdownBox } from "./styled/NavberStyled";
import { useNavigate } from "react-router-dom";
import surf from "./img/logo.png"
import searchImg from "./img/search.png"
import login from "./img/login.png"
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  // 토큰 유무 확인
  const signOutButtonHandler = () => {
    if (Cookies.get("Authorization")) {
      Cookies.remove("Authorization");
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  // class = invert 전역적으로 만들어주는 함수
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    document.documentElement.classList.toggle('invert', !isClicked);
  };
  // 버튼 클릭 유무
  const handleLoginIconClick = () => {
    console.log(Cookies.get("Authorization"));


    setShowDropdown(!showDropdown);
  };
  return (
    <HeaderNavbarStyle >
      <HeaderNavbarInner>
        <HeaderNavbarLeft></HeaderNavbarLeft>
        <HeaderNavbarImg href="/">
          <img src={surf} alt="뉴닉" />
        </HeaderNavbarImg>
        {/* invert 모드 */}
        <NavbarUi>
          <input type="checkbox" id="toggle" hidden onClick={handleButtonClick} />
          <label htmlFor="toggle" className="toggleSwitch">
            <span className="toggleButton"></span>
          </label>
        </NavbarUi>
        <IconContainer>
          <HeaderNavbarIcon>
            <Link to="/search">
              <SearchIcon src={searchImg} alt="검색" />
            </Link>
          </HeaderNavbarIcon>
          <HeaderNavbarIcon onClick={handleLoginIconClick}>
            <SearchIcon src={login} alt="로그인" />
            {/* 상단 이모티콘 눌렀을때 */}
            {showDropdown && (
              // 로그인&로그아웃 유무 확인
              <DropdownBox>
                {Cookies.get("Authorization") ? (
                  <>
                    <a href="/mypage">마이페이지</a>
                    <a href="/profile">프로필</a>
                    <a onClick={signOutButtonHandler} href="/">로그아웃</a>
                  </>
                ) : (
                  <a href="/login">로그인</a>
                )}

              </DropdownBox>
            )}
          </HeaderNavbarIcon>
        </IconContainer>
      </HeaderNavbarInner>
    </HeaderNavbarStyle>
  );
}
export default CustomNavbar;

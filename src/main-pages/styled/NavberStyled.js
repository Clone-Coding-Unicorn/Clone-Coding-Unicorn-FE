import styled from 'styled-components';

export const HeaderNavbarStyle = styled.nav`
    background: #eae7de;
    border-bottom: 1px solid #051619;
    position: relative;
    z-index: 4;
`;

export const HeaderNavbarInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1360px;
    margin: 0 auto;
    padding: 2rem 3% 1.5rem;
`;

export const HeaderNavbarLeft = styled.div`
    display: flex;
`;



export const HeaderNavbarImg = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 226px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    img {
        width: 100%;
        vertical-align: middle;
    }
`;

export const HeaderNavbarIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 48px;
    height: 48px;
    border: 1px solid #051619;
    box-sizing: border-box;
    cursor: pointer;
`;

export const SearchIcon = styled.img`
    width: 100%;
    height: 100%;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    visibility: visible;
    @media screen and (max-width:767px) {
            visibility: hidden;
    }
    `;

export const NavbarUi = styled.div`
    margin-left: auto;
    margin-right: 3.2rem;

    .toggleSwitch {
  width: 100px;
  height: 50px;
  display: block;
  position: relative;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
  cursor: pointer;
  margin: 30px;
}

.toggleSwitch .toggleButton {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: black;
}

#toggle:checked ~ .toggleSwitch {
  background: white;
}

#toggle:checked ~ .toggleSwitch .toggleButton {
  left: calc(100% - 44px);
  background: black;
}

.toggleSwitch, .toggleButton {
  transition: all 0.2s ease-in;
}
`

export const DropdownBox = styled.div`
position: absolute;
top: 100%;
background-color: #fff;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
padding: 16px; 
  width: 200px;
a {
    display: block;
    padding: 8px 16px;
    color: #333;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f2f2f2;
    }
  }
`;
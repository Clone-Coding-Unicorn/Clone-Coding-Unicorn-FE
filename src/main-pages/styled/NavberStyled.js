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
    padding: 3rem 5% 2.5rem;
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


`

export const DropdownBox = styled.div`
position: absolute;
top: 100%;
background-color: #fff;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
padding: 16px; /* Increased padding for a larger box */
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
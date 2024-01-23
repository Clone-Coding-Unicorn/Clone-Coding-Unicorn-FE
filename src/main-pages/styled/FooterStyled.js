import styled, { keyframes } from 'styled-components';

// 하단 footer 배너
const rollingleft = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-100%);
  }
  50.01% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const MarqueeContainer = styled.div`
    border-top: 1px solid #051619;
    overflow: hidden; 
`;
export const MarqueeText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background: #eae7de;
  visibility: hidden;
  font-size: 1.5rem;
  p {
    
    white-space: nowrap;
    animation: ${rollingleft} 20s linear infinite; 
    will-change: transform;
  }
`;

export const HoverText = styled.div`
    position: relative;
    text-align: center;
    font-size: 1.5rem;
    padding: 10px;
    visibility: visible;
`;

export const HoverContainer = styled.div`

  &:hover ${MarqueeText} {
    visibility: visible;
    opacity: 1;
  }
  &:hover ${HoverText} {
    visibility: hidden;
    opacity: 0;
  }
`;


// 하단 footer
export const MainFooter = styled.footer`
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin: 0 auto;
    padding: 4rem;
    background: #eae7de;
    border-top: 1px solid #051619;
    box-sizing: border-box;
    position: relative;
    z-index: 4;
    float: left;
    width: 100%;
`
export const MainFooterAddress = styled.div`
    float: left;
    width: 50%;
`
export const MainFooterLogo = styled.div`
    max-width: 200px;
    margin: 0 0 16px;
    float: left;
    width: 50%;
    box-sizing: border-box;
    img {
        width:100%;
        vertical-align: middle;
    }
`
export const MainFooterSitemap = styled.nav`
    display: flex;
    float: left;
    width: 50%;
    margin-bottom: 4em;
    position: relative;
`
export const FooterSitemapItem = styled.div`
    width: 50%;
`
export const SitemapItemLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 0.5rem;
    color: #051619;
    text-decoration-line: none;
`

export const FooterAddressIfro = styled.div`
    width: 100%;
    margin: 2rem 0 0;
`
export const FooterAddressRight = styled.small`
    display: block;
    margin: 1rem 0 0;
`
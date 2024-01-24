import styled, { createGlobalStyle } from 'styled-components';
import gosumbanner2 from "../img/gosumbanner2.png"

export const GlobalStyles = createGlobalStyle`
&.invert {
    -webkit-filter: invert(100%);
    filter: invert(100%);
  } 
body {
  font-family: 'Noto Sans KR', sans-serif;
}
`


export const MainBodyStyled = styled.div`
    background: #eae7de;
    letter-spacing: -.0125rem;
    background: #eae7de;
    letter-spacing: -.0125rem;
    height: 100%;
    color: #051619;
    overflow: hidden;
    font-size: 14px;
    line-height: 1.8;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
`

export const IntroInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 5%;
    box-sizing: border-box;
`
export const IntroHeadTitle = styled.div`
    padding: 1rem 0;
    border-bottom: 1px solid #051619;
    font-size: 3rem;
    letter-spacing: -.025rem;
    text-align: left; 
    
`
export const IntroHead = styled.header`
    position: relative;
    overflow: hidden;
    justify-content: flex-start;
`
export const BoxImg = styled.div`
    background: #ff6b00;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5%;
`
export const BoxImgButton = styled.button`
    text-align: center;
    border: 2px solid #051619;
    border-radius: 8px;
    box-sizing: border-box;
    color: #051619;
    background: #fff;
    margin: 0;
    padding-left: 5px;
    padding-right: 5px;
`

export const SubscribeGosum = styled.div`
    position: absolute;
    bottom: -9rem;
    left: 50%;
    width: 100%;
    max-width: 530px;
    margin-left: 60px;
    
    img {
        width: 100%; // 고슴이 사이즈
        vertical-align: middle;
    }
    
`

// 카테고리 부분들
export const MainCategory = styled.nav`
    display: flex;
    justify-content: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    background: rgb(255, 255, 255);
    box-sizing: border-box;
    overflow: hidden;
    position: sticky;
    top: 0px;
    z-index: 1;
    margin-bottom: -1px;
    

`
export const MainCategoryInner = styled.div`
    display: flex;
    white-space: nowrap;
    overflow: overlay;
    text-decoration-line: none;
`

export const CategoryLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 2rem;
    padding: 1.25rem 0px;
    box-sizing: border-box;
    font-size: 1.125rem;
    color: rgb(5, 22, 25);
    cursor: pointer;
    text-decoration-line: none;
`
// 카드 부분들
export const HomeRecent = styled.section`
<<<<<<< HEAD
    width: 100%;
    max-width: 1960px;
    margin: 0 auto;
    padding: 0 5%;
    position: relative;
    flex-wrap: wrap;
    
    @media screen and (max-width: 1023px) {
        .card-group {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }
@media screen and (max-width:767px) {
    .card-group {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }
}
    .card {
        text-decoration-line: none;
        background: #eae7de;
        transition: background-color 0.3s ease;
        img {
=======
    width: 90%;
    max-width: 1360px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 5%;
    position: relative;
.card-group {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    border-color: #051619;
    border-style: solid;
    border-width: 1px 0 0 1px;
}

.card {
    box-sizing: border-box;
    display: block;
    color: #051619;
    border: 1px solid #051619;
    border-width: 0 1px 1px 0;
    cursor: pointer;
    text-decoration-line: none;
    background: #eae7de;
    transition: background-color 0.3s ease;
    width: 25%;
        img {
            width: 100%;
            max-height: 200px;
            height: 100%; 
            object-fit: cover;
>>>>>>> 11d1de95bb02784f5e968f1b34a9e19cfdcece94
            filter: grayscale(100%);
            transition: filter 0.3s ease;
        }
        &:hover {
            background-color: #f8f9fa;
            img {
                filter: grayscale(0%);
            }
        }
<<<<<<< HEAD
    }
=======
    @media screen and (max-width: 1200px) {
        width: 33.33%; 
    }

    @media screen and (max-width: 768px) {
        width: 50%; 
    }

    @media screen and (max-width: 600px) {
        width: 100%; 
    }
}


.card-body {
  padding: 10px;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1rem;
  color: #666;
}


 
>>>>>>> 11d1de95bb02784f5e968f1b34a9e19cfdcece94
`

// 하단 카드 배너
export const HomeBanner = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 14rem 0 8rem;
    padding-top: 90px;
    border-top: 2px solid #051619;
    position: relative;
    cursor: pointer;
    background: #ff6b00;
    text-decoration-line: none;
    &:hover img {
        content: url(${gosumbanner2}); /* 호버 시 이미지 교체 */
    }
`

export const HomeBannerImage = styled.figure`
    position: absolute;
    bottom: 15px;
    img {
        width: 60%;
        vertical-align: middle;
    }
    
`

export const HomeBannerText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border-top: 1px solid #051619;
    border-bottom: 2px solid #051619;
    background: #fff;
    position: relative;
    color: #051619;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.4;
    

`





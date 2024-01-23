import React from 'react'
import { FooterAddressIfro, FooterAddressRight, FooterSitemapItem, HoverContainer, HoverText, MainFooter, MainFooterAddress, MainFooterLogo, MainFooterSitemap, MarqueeContainer, MarqueeText, SitemapItemLink } from './styled/FooterStyled'
import logo from "./img/logo.png"
import { MainBodyStyled } from './styled/MainPagesStyled'

function CustomFooter() {
    return (
        <MainBodyStyled>
            <HoverContainer>
                <MarqueeContainer>
                    <MarqueeText>
                        <HoverText>오늘까지 잔뜩 뉴스레터를 발행했고 많이많이 구독했어요!</HoverText>
                        <p>구독해주세요 </p>
                        <p>구독해주세요 </p>
                        <p>구독해주세요 </p>
                        <p>구독해주세요 </p>
                        <p>구독해주세요 </p>
                        <p>구독해주세요 </p>
                        <p>구독해주세요 </p>
                    </MarqueeText>
                </MarqueeContainer>
            </HoverContainer>
            <MainFooter>

                <MainFooterAddress>
                    <MainFooterLogo>
                        <img src={logo} alt="뉴닉" />
                    </MainFooterLogo>
                </MainFooterAddress>

                <MainFooterSitemap>
                    <FooterSitemapItem>
                        <SitemapItemLink>뉴닉탄생기</SitemapItemLink>
                        <SitemapItemLink>인스타그램</SitemapItemLink>
                        <SitemapItemLink>네이버 블로그</SitemapItemLink>
                        <SitemapItemLink>X</SitemapItemLink>
                    </FooterSitemapItem>
                    <FooterSitemapItem>
                        <SitemapItemLink>모두와 함께, 뉴닉</SitemapItemLink>
                        <SitemapItemLink>물물교환</SitemapItemLink>
                        <SitemapItemLink>여성의 날</SitemapItemLink>
                        <SitemapItemLink>2020 총선</SitemapItemLink>
                    </FooterSitemapItem>
                    <FooterSitemapItem>
                        <SitemapItemLink>서비스이용약관</SitemapItemLink>
                        <SitemapItemLink>개인정보처리방침</SitemapItemLink>
                        <SitemapItemLink>제휴문의</SitemapItemLink>
                        <SitemapItemLink>고객센터</SitemapItemLink>
                    </FooterSitemapItem>
                </MainFooterSitemap>

                <FooterAddressIfro>
                    ㈜뉴닉 / 대표: 김소연 / 사업자등록번호: 632-81-01159 /
                    대표전화: 02-6952-1807 / 통신판매번호: 2020-서울마포-2938 /
                    개인정보보호책임자: 김소연 / 담당자메일주소: whatsup@newneek.co
                    <br />
                    서울특별시 마포구 어울마당로 35, 5층 (04048)
                    <br />
                    <p>근무시간이 일정하지 않아 전화대신 고객센터를 이용해주세요!</p>
                    <FooterAddressRight>ⓒ NEWNEEK Co., Ltd</FooterAddressRight>
                </FooterAddressIfro>

            </MainFooter>
        </MainBodyStyled>
    )
}

export default CustomFooter
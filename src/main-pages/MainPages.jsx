import React, { useEffect, useState } from 'react';
import { HomeBannerImage, HomeBannerText, HomeRecent, MainCategory, BoxImg, IntroInner, IntroHeadTitle, SubscribeGosum, MainBodyStyled, MainCategoryInner, CategoryLink, HomeBanner, MainFooter, MainFooterLogo, MainBodyColor, RollingBannerContainer, RollingBanner, IntroHead, RollingText, MarqueeText, MarqueeContainer, MargueeFooter, HoverContainer, HoverText, MainFooterAddress, FooterAddressRight, MainFooterSitemap, FooterSitemapItem, FooterAddressIfro, SitemapItemLink, BoxImgButton, HomeRecentPagination } from './styled/MainPagesStyled'
import gosum from "./img/gosum.png"
import gosumbanner from "./img/gosumbanner.png"
import { api } from '../axios/api';
import CustomLoading from './Loading';

function MainPages() {
  // 나중에 받을 카드 데이터
  const [recentItems, setRecentItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await api.get(`/api/posts`);
        console.log(response);
        setRecentItems(response.data[1]);

      } catch (error) {
        console.error("에러 발생:", error);
      } finally {
        // 로딩 상태 변경
        setLoading(false);
      }
    };
    fetchData();
  }, [page])
  const handleLoadMore = () => {
    setPage(page => page + 1);  // 페이지 번호를 증가시킵니다.
  };
  return (

    <MainBodyStyled>
      <IntroHead>
        {/* 상단 고슴이 부분 */}
        <IntroHeadTitle>
          <IntroInner>
            "우리가 시간이 없지! 세상이 안 궁금하냐!!"
          </IntroInner>
        </IntroHeadTitle>
        <BoxImg>
          <IntroInner>
            <SubscribeGosum>
              <img src={gosum} alt="고슴" />
            </SubscribeGosum>
          </IntroInner>
          ✨지금 596,237명이 뉴닉을 읽고 있어요.

          세상 돌아가는 소식, <br />
          알고는 싶지만 신문 볼 새 없이 바쁜 게 우리 탓은 아니잖아요!<br />
          월/화/수/목/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.<br />

          <input />
          <br />
          <input />
          <br />
          <input type='checkbox' />개인정보 수집·이용에 동의합니다
          <br />
          <input type='checkbox' />광고성 정보 수신에 동의합니다
          <br />

          <BoxImgButton>뉴스레터 무료로 구독하기 </BoxImgButton> &nbsp;
          <BoxImgButton style={{ backgroundColor: '#000', color: '#fff' }}>앱 다운로드하기  </BoxImgButton>
        </BoxImg>
      </IntroHead>
      <MainCategory>
        {/* 카테고리 부분 */}
        <MainCategoryInner>
          {['전체', '증권', '부동산', '경제 · 금융', '산업', '정치', '사회', '국제', '오피니언', '문화 · 스포츠', '서경'].map(category => {
            if (category === '전체')
              return <CategoryLink key={category} href="/">전체</CategoryLink>
            return (
              <CategoryLink key={category} href={`/posts/${category}`}>{category}</CategoryLink>
            );
          })}

        </MainCategoryInner>
      </MainCategory>
      {/* 로딩시 */}
      {loading ? (
        <CustomLoading />
      ) : (
        <HomeRecent>
          {/* 카드부분 */}
          <div className="card-group" >
            {recentItems && recentItems.map((recentItems) => (
              <a className="card" href={`/${recentItems.id}`} key={recentItems.id}>
                <img src={recentItems.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{recentItems.title}</h5>
                  <p className="card-text">{recentItems.date}</p>
                  <p className="card-text"><small className="text-muted">{recentItems.category}</small></p>
                </div>
              </a>
            ))}
          </div>
          <HomeRecentPagination>
            <button onClick={handleLoadMore}>더보기</button>
          </HomeRecentPagination>
        </HomeRecent>
      )}
      {/* 하단 빛나는 고슴이 */}
      <HomeBanner href="/">
        <HomeBannerImage>
          <img src={gosumbanner} alt="고슴" />
        </HomeBannerImage>
        <HomeBannerText>
          뉴닉에서 만나요
        </HomeBannerText>
      </HomeBanner>
    </MainBodyStyled>
  )
}

export default MainPages

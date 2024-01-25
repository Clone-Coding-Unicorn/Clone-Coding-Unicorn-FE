import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PostBody, PostContainer, PostHead, PostHeadProgress, PostScrollWrap, PostSubmit, PostSubscribe, PostSubscribeGroup, PostTextfield } from './styled/DetailPages';
import { api } from '../axios/api';
import CustomLoading from './Loading';

function DetailPages() {
    const { id } = useParams();
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    // 스크롤 이벤트를 하기위한 스크롤 수치
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {

        const fetchData = async () => {
            try {
                if (!id) {
                    // 유효한 id 없다면 요청을 보내지 않음
                    return;
                }
                const response = await api.get(`/api/posts/${id}`);
                console.log(response);
                setPosts(response.data);
            } catch (error) {
                console.error("에러 발생:", error);
            } finally {
                // 로딩 상태 변경
                setLoading(false);
            }
        };
        fetchData();

        const handleScroll = () => {
            // 현재 스크롤 위치
            const scrollY = window.scrollY;

            // 문서의 전체 높이
            const documentHeight = document.documentElement.scrollHeight - 1600;

            // 스크롤 위치를 퍼센티지로 계산
            const percentage = (scrollY / documentHeight) * 100;

            // state 업데이트
            setScrollPosition(percentage);
        };
        window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 등록
        return () => {
            window.removeEventListener('scroll', handleScroll); 		// 스크롤 이벤트 제거
        };
    }, []);


    if (loading) {
        return <CustomLoading />
    }
    return (
        <div>
            <PostContainer>
                <PostScrollWrap visible={scrollPosition > 5}><p>{posts && posts.title}</p>
                    <PostHeadProgress style={{ width: `${scrollPosition}%` }}></PostHeadProgress>
                </PostScrollWrap>
            </PostContainer>
            <PostHead>
                {posts && (
                    <>
                        <p>{posts.category}</p>
                        <h1>{posts.title}</h1>
                        <p>{posts.date}</p>
                    </>
                )}
            </PostHead>
            <PostBody>
                {posts && (
                    <>
                        <img src={posts.imageUrl} alt="..." />
                        <div dangerouslySetInnerHTML={{ __html: posts.contents }} />
                    </>
                )}

            </PostBody>
            <PostSubscribe>
                <PostSubscribeGroup>
                    <PostTextfield placeholder="이메일 주소">

                    </PostTextfield>
                    <PostSubmit>
                        뉴스레터 구독하기
                    </PostSubmit>
                </PostSubscribeGroup>
            </PostSubscribe>
        </div>
    )
}

export default DetailPages
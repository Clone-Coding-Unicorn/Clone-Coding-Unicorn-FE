import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../axios/api';
import CustomLoading from './Loading';
import { CategoryLink, HomeRecent, MainCategory, MainCategoryInner } from './styled/MainPagesStyled';

function Categorypages() {
    const { category } = useParams();
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!category) {
                    // 유효한 category 없다면 요청을 보내지 않음
                    return;
                }

                const response = await api.get(`/api/posts/category?category=${category}`);
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
    }, []);
    return (
        <>
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
            {category}
            {/* 로딩중 */}
            {loading ? (
                <CustomLoading />
            ) : (
                <HomeRecent>
                    {/* 카드부분 */}
                    <div className="card-group" >
                        {posts && posts.map((posts) => (
                            <a className="card" href={`/${posts.id}`} key={posts.id}>
                                <img src={posts.imageUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{posts.title}</h5>
                                    <p className="card-text">{posts.date}</p>
                                    <p className="card-text"><small className="text-muted">{posts.category}</small></p>
                                </div>
                            </a>
                        ))}
                    </div>
                </HomeRecent>
            )}
        </>
    )
}

export default Categorypages
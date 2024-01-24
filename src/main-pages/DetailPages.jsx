import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import { PostHead, Postbody } from './styled/DetailPages';
import { api } from '../axios/api';
import CustomLoading from './Loading';
function DetailPages() {
    const { id } = useParams();
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

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
    }, []);
    if (loading) {
        return <CustomLoading />
    }
    return (
        <div>
            <PostHead>
                <p>{posts.category}</p>
                <h1>{posts.title}</h1>
                <p>{posts.date}</p>
            </PostHead>
            <Postbody>
                <img src={posts.imageUrl} alt="..." />
                <div dangerouslySetInnerHTML={{ __html: posts.contents }} />
            </Postbody>

        </div>
    )
}

export default DetailPages
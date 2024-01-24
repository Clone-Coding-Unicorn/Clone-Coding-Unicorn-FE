import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import { PostHead } from './styled/DetailPages';

function DetailPages() {
    const { id } = useParams();
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 서버에서 받아올 데이터
        // const fetchData = async () => {
        //     try {
        //         if (!id) {
        //             // 유효한 id 없다면 요청을 보내지 않음
        //             return;
        //         }
        //         const response = await api.get(`/api/posts/${quizId}`);
        //         setPosts(response.data);
        //     } catch (error) {
        //         console.error("에러 발생:", error);
        //     }
        // };
        // fetchData();
        setLoading(false);
    }, []);
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <BeatLoader color="#00BFFF" size={15} />
            </div>
        );
    }
    return (
        <div>
            <PostHead>
                <h1>2024년 전기차 보조금, 어떻게 바뀔까?</h1>
                <p>2024/01/24</p>
            </PostHead>


        </div>
    )
}

export default DetailPages
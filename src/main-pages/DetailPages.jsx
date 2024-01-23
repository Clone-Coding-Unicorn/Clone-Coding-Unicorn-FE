import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';

function DetailPages() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
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
            <h2>상세 페이지</h2>
            <p>카드 ID: {id}</p>
            
        </div>
    )
}

export default DetailPages
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchInputStyled, SearchClose, SearchContainer } from './styled/SearchPages';
import SearchResultPages from './SearchResultPages';
import { useNavigate } from "react-router-dom";


function Searchpages() {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://example.com/api/search?query=${searchTerm}`);
            setSearchResults(response.data);
            if (response.data.length > 0) {
                navigate('/search-results');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <SearchContainer>
                <SearchInputStyled
                    type="text"
                    placeholder="검색어를 입력하세요"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <SearchClose onClick={handleSearch}>검색</SearchClose>

            </SearchContainer>
            {searchResults.length > 0 && <SearchResultPages searchResults={searchResults} />}
        </>
    );
}

export default Searchpages; 
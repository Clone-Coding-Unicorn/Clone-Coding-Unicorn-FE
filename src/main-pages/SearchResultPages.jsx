import React from 'react'
import { HomeRecent } from './styled/MainPagesStyled';

function SearchResultPages({ searchResults }) {
    return (
        <>
            <h2>검색 결과</h2>
            <HomeRecent>
                {/* 카드부분 */}
                <div className="card-group" >
                    {searchResults && searchResults.map((searchResults) => (
                        <a className="card" href={`/${searchResults.id}`} key={searchResults.id}>
                            <img src={searchResults.imageUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{searchResults.title}</h5>
                                <p className="card-text">{searchResults.date}</p>
                                <p className="card-text"><small className="text-muted">{searchResults.category}</small></p>
                            </div>
                        </a>
                    ))}
                </div>
            </HomeRecent>
        </>
    );
}
export default SearchResultPages
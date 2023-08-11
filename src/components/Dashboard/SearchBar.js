import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import keywordApi from '../../services/keywordApi';

const SearchBar = ({
    keyword, setKeyword,
    keywords, setKeywords,
    isLoading, setIsLoading }) => {
    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    };

    const handleSearch = async () => {
        setIsLoading(true);

        let keywords = [];

        if (!keyword || !keyword.length) {
            keywords = await keywordApi.getAllKeywords();
        } else {
            keywords = await keywordApi.searchKeyword(keyword);
        }

        if (keywords.length) {
            setKeywords(keywords);
        } else {
            setKeywords([]);
        }

        setIsLoading(false);
    };

    return (
        <div className="row justify-content-center col-10">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter keyword..."
                    value={keyword}
                    disabled={isLoading || !keywords || !keywords.length}
                    onChange={handleKeywordChange}
                />
                <button className="btn btn-primary"
                    disabled={isLoading || !keywords || !keywords.length}
                    onClick={handleSearch}>
                    <AiOutlineSearch />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
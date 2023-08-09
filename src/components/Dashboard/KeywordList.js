import React, { useEffect, useState } from 'react';
import keywordApi from '../../services/keywordApi';
import './Dashboard.css';
import CachePage from '../CachePage/CachePage';
import Modal from 'react-modal';

const PAGESIZE = 10;

const KeywordList = ({ keywords, setKeywords, isLoading, setIsLoading }) => {
    const [selectedKeyword, setSelectedKeyword] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLastPage, setIsLastPage] = useState(false);
    const [pageNo, setPageNo] = useState(1);

    useEffect(() => {
        fetchKeywords();
    }, [pageNo]);

    const handlePrevPage = () => {
        if (pageNo > 1) {
            setIsLastPage(false);
            setPageNo(pageNo - 1);
        }
    };

    const handleNextPage = () => {
        setPageNo(pageNo + 1);
    };

    const fetchKeywords = async () => {
        try {
            setIsLoading(true);
            const allKeywords = await keywordApi.getAllKeywords(pageNo, PAGESIZE);

            // Check if next page available
            if (allKeywords.length < PAGESIZE) {
                setIsLastPage(true);
            }

            setKeywords(allKeywords);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error('Error fetching keywords:', error);
        }
    };

    const openCachePage = async (keywordId) => {
        try {
            const keyword = await keywordApi.getKeywordById(keywordId);

            setSelectedKeyword(keyword);
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error fetching keyword by ID:', error);
        }
    };

    const closeModal = () => {
        setSelectedKeyword(null);
        setIsModalOpen(false);
    };

    return (
        <div className="keyword-list text-center">
            {isLoading ?
                <div className="card-container p-2">
                    <h4>Loading...</h4>
                </div> :
                (Array.isArray(keywords) && (keywords.length > 0) ?
                    <div className="card-container p-2">
                        {keywords.map((keyword) => (
                            <div className="card my-3 d-flex" key={keyword.id}>
                                <h3 className='card-header'>{keyword.keyword}</h3>
                                <table className="keyword-table">
                                    <tbody>
                                        <tr>
                                            <td>Total AdWords Advertisers:</td>
                                            <td>{keyword.totalAdWordsAdvertisers}</td>
                                        </tr>
                                        <tr>
                                            <td>Total Links:</td>
                                            <td>{keyword.totalLinks}</td>
                                        </tr>
                                        <tr>
                                            <td>Total Search Results:</td>
                                            <td>{keyword.totalSearchResults}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className='btn btn-primary col-md-2 align-self-center col-11 m-2'
                                    onClick={() => openCachePage(keyword.id)}>
                                    View Cache
                                </button>
                                <div className="card-footer text-muted">
                                    {new Date(keyword.createdAt).toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div> : <h4>No Keywords searched yet!</h4>)}
            <div className="pagination gap-1 align-items-center justify-content-center">
                <button className="btn btn-secondary" onClick={handlePrevPage}
                    disabled={pageNo === 1}>
                    Previous
                </button>
                <span className="page-number">Page {pageNo}</span>
                <button className="btn btn-secondary" onClick={handleNextPage}
                    disabled={isLastPage}>
                    Next
                </button>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Cache Modal"
            >
                {selectedKeyword && <CachePage htmlCode={selectedKeyword.htmlCode} />}
                <button onClick={closeModal}>Close Modal</button>
            </Modal>
        </div>
    );
};

export default KeywordList;
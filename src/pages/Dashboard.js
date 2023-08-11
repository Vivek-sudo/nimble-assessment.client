import React, { useState } from 'react';
import KeywordList from '../components/Dashboard/KeywordList';
import UploadCSV from '../components/Dashboard/UploadCSV';
import SearchBar from '../components/Dashboard/SearchBar';

const Dashboard = () => {
  const [keywords, setKeywords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  return (
    <div
      className="dashboard-container px-md-5"
      style={{
        minHeight: '83vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', padding: '1rem',
      }}>
      <div
        className="dashboard-content mb-3"
        style={{
          width: '100%', maxWidth: '800px', display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
          padding: '1rem', justifyContent: 'center', alignItems: 'center', background: 'white',
          borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }} >
        <SearchBar
          keyword={keyword} setKeyword={setKeyword}
          keywords={keywords} setKeywords={setKeywords}
          isLoading={isLoading} setIsLoading={setIsLoading} />
        <UploadCSV
          isLoading={isLoading} setIsLoading={setIsLoading} />
      </div>
      <div
        className="dashboard-content"
        style={{
          width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column',
          gap: '2rem', padding: '1rem', background: 'white', borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }} >
        <KeywordList
          keywords={keywords} setKeywords={setKeywords}
          isLoading={isLoading} setIsLoading={setIsLoading} />
      </div>
    </div>
  );
};

export default Dashboard;
import React, { useState } from 'react';
import keywordApi from '../../services/keywordApi';
import './Dashboard.css';

const UploadCSV = ({ isLoading, setIsLoading }) => {
    const [isProcesseing, setIsProcesseing] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setIsProcesseing(true);
        setFileName(file.name);

        try {
            const formData = new FormData();
            formData.append('csvFile', file);

            const uploadCSV = await keywordApi.uploadCSV(formData);
            if (uploadCSV && uploadCSV.message) {
                setIsLoading(true);
                setIsProcesseing(false);

                await keywordApi.getAllKeywords();
                setIsLoading(false);
            };
        } catch (error) {
            console.error('Error uploading CSV:', error);
            setFileName('');
            setIsProcesseing(false);
        }
    };

    return (
        isProcesseing ?
            <div className='container-fluid d-flex justify-content-center align-items-center'>
                Processing{` ${fileName}`}...
            </div> : <>
                <label className={`upload-button ${!isProcesseing ? 'processed' : ''}`}>
                    Upload CSV
                    <input type="file" accept=".csv" name='csvFile'
                        onChange={handleFileUpload} disabled={isLoading} />
                </label>
                {fileName ?
                    <span className='text-center'>Successfully uploaded {fileName}</span>
                    : null}
            </>
    );
};

export default UploadCSV;
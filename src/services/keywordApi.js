import axiosInstance from '../utils/AxiosInstance';

const keywordApi = {
    getAllKeywords: async (page = 1, pageSize = 10) => {
        try {
            const response = await axiosInstance.get(`keywords`, {
                params: {
                    page,
                    pageSize,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch keywords');
        }
    },

    getKeywordById: async (keywordId) => {
        try {
            const response = await axiosInstance.get(`keywords/${keywordId}`);
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch keyword');
        }
    },

    uploadCSV: async (file) => {
        try {
            const response = await axiosInstance.post(`keywords/upload-csv`, file, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            throw new Error('CSV upload failed');
        }
    },
    searchKeyword: async (keyword) => {
        try {
            const response = await axiosInstance.get(`keywords/search`, {
                params: {
                    keyword,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to search for keyword');
        }
    },
};

export default keywordApi;
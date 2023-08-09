import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
    const [errorState, setErrorState] = useState({
        hasError: false,
        error: null,
        errorInfo: null,
    });

    const handleError = (error, errorInfo) => {
        setErrorState({
            hasError: true,
            error: error,
            errorInfo: errorInfo,
        });
    };

    if (errorState.hasError) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger">
                    <h1>Something went wrong.</h1>
                    <p>{errorState.error && errorState.error.toString()}</p>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {errorState.errorInfo && errorState.errorInfo.componentStack}
                    </details>
                </div>
            </div>
        );
    }

    try {
        return children;
    } catch (error) {
        handleError(error, error.stack);
        return null;
    }
};

export default ErrorBoundary;
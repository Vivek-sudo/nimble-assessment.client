import React from 'react';

const CachePage = ({ htmlCode }) => {
    // Create a new document to parse the HTML code
    const doc = new DOMParser().parseFromString(htmlCode, 'text/html');

    // Add target="_blank" attribute to all <a> elements to open links in new tab
    const addTargetBlank = (node) => {
        if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'A') {
            node.setAttribute('target', '_blank');
        }
        for (const childNode of node.childNodes) {
            addTargetBlank(childNode);
        }
    };
    addTargetBlank(doc);

    // Convert the modified HTML back to a string
    const modifiedHtmlCode = new XMLSerializer().serializeToString(doc);

    return (
        <div dangerouslySetInnerHTML={{ __html: modifiedHtmlCode }} />
    );
};

export default CachePage;
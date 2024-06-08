import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function PDFViewer({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-8 bg-white shadow-md rounded-md">
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p className="text-center text-sm text-gray-500">
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default PDFViewer;

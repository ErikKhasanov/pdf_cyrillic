import React from 'react';
import {Document, Page} from "react-pdf";

const PdfViewer = ({file, page, textRender, onLoadHandler, size}) => {
  return (
    <div>
      <Document
        file={file}
        onLoadSuccess={onLoadHandler}
        renderMode={'svg'}
      >
        <Page
          pageNumber={page}
          customTextRenderer={textRender}
          // width={size.width}
          height={size.height}
        />
      </Document>
    </div>
  );
};

export default PdfViewer;
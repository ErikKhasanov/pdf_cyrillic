import React, {useEffect, useRef, useState} from 'react';
import { pdfjs } from 'react-pdf';
import {createUseStyles} from "react-jss";
import DocumentControl from "../DocumentControl";
import PdfViewer from "../PdfViewer";
import HighlightPdf from "./HighliightPdf";
import {debounce} from "../../utils";

// init worker
if(process.env.NODE_ENV === 'development'){
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`
}

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  documentsGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    overflow: "hidden"
  },
  footer: {
    display: 'flex',
  }
})

const Documents = ({pdfFile}) => {
  const classes = useStyles()
  const footerRef = useRef(null)

  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState();
  const [size, setSize] = useState({});

  useEffect(() => {
    if (window) {
      window.addEventListener('resize', debounce(handlerResize, 500))
    }
  }, [window])

  const handlePage = (action) => {
    if (action === 'increment') {
      setPage(page + 1)
    } else if (action === 'decrement' && page !== 1) {
      setPage(page - 1)
    }
  }

  const onLoadHandler = ({numPages}) => {
    setNumPages(numPages)
  }

  const handlerResize = (e) => {
    const clientHeight = e.currentTarget.innerHeight;
    const newHeight = clientHeight - footerRef.current.clientHeight - 40;

    setSize({
      height: Math.round(newHeight)
    })
  }

  return (
    <div className={classes.root}>
      <div className={classes.documentsGrid}>
        <HighlightPdf file={pdfFile} handlePage={handlePage} page={page} onLoadHandler={onLoadHandler} size={size}/>
        <PdfViewer file={pdfFile} page={page} size={size}/>
      </div>
      <div ref={footerRef} className={classes.footer}>
        <DocumentControl handlePage={handlePage} page={page} numPages={numPages}/>
      </div>
    </div>
  );
};

export default Documents;
import React, {useState} from 'react';
import {createUseStyles} from "react-jss";

import Form from "./components/Form";
import Documents from "./components/Documents";

const useStyles = createUseStyles({
  '@global': {
    span: {
      transform: 'none!important'
    }
  },
  root: {
    '& .react-pdf__Page': {
      display: 'inline-block'
    },
    '& .mark.cyrillic': {
      background: 'yellow'
    },
    '& .mark.latin': {
      background: 'aqua'
    }
  }
})

function App() {
  const classes = useStyles()

  const [pdfFile, setPdfFile] = useState(null);

  const handlePdfFile = (file) => {
    setPdfFile(file)
  }

  return (
    <div className={classes.root}>
      {!pdfFile ? (
        <Form handlePdfFile={handlePdfFile}/>
      ) : (
        <Documents pdfFile={pdfFile} />
      )}
    </div>
  );
}

export default App
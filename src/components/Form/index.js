import React, {useState} from 'react';
import {createUseStyles} from "react-jss";
import DragAndDropForm from "./DragAndDropForm";
import UploadForm from "./ManualUploadForm";
import {PdfFileReader} from "./utils";

const useStyles = createUseStyles({
  uploadFileForm: {
    display: 'flex',
    flexDirection: 'column',
    '& h1': {
      textAlign: 'center'
    }
  },

  alternativeForm: {
    display: 'inline-flex',
    flexDirection: 'column',
    margin: '0 auto',
    textAlign: 'center',
    '& span': {
      marginBottom: '15px'
    }
  },

  form__upload: {
    '& input': {
      marginBottom: '15px'
    },
    '& button': {
      padding: '5px',
      cursor: 'pointer'
    }
  }
})

const pdfReader = new PdfFileReader()

const Index = ({handlePdfFile}) => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className={classes.uploadFileForm}>
      <h1>Загрузите PDF для поиска кириллицы</h1>
      {isLoading && 'Загрузка...'}
      <DragAndDropForm handlePdfFile={handlePdfFile} pdfReader={pdfReader} setIsLoading={setIsLoading}/>
      <div className={classes.alternativeForm}>
            <span>
            или
            </span>
        <UploadForm handlePdfFile={handlePdfFile} pdfReader={pdfReader} setIsLoading={setIsLoading}/>
      </div>
    </div>
  );
};

export default Index;
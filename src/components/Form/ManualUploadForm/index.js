import React from 'react';

import './style.css';

const UploadForm = ({handlePdfFile, pdfReader, setIsLoading}) => {
  const handleForm = (e) => {
    e.preventDefault()
    setIsLoading(true)
    pdfReader.readPdfFileAndReturnBase64(e.target.files[0]).then((res) => handlePdfFile(res)).then(() => setIsLoading(false))
  }

  return (
    <form className='form__upload' onSubmit={(e) => e.preventDefault()}>
      <input type="file" onChange={handleForm} required/>
    </form>
  );
};

export default UploadForm;
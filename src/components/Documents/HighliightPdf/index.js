import React from 'react';
import PdfViewer from "../../PdfViewer";

const HighlightPdf = ({file, handlePage, page, onLoadHandler, size}) => {
  function highlightPattern(text) {
    const cyrillicPattern = /[а-яА-Я]/g;
    const latinPattern = /[a-zA-Z]/g;

    let splitText;
    let matches;
    let classname

    if (cyrillicPattern.test(text)) {
      matches = text.match(cyrillicPattern);
      splitText = text.split(cyrillicPattern)
      classname = 'cyrillic'
    } else if (latinPattern.test(text)) {
      matches = text.match(latinPattern);
      splitText = text.split(latinPattern)
      classname = 'latin'
    }

    if (!matches) return

    if (splitText.length <= 1) {
      return text;
    }

    return splitText.reduce((arr, element, index) => (matches[index] ? [
      ...arr,
      element,
      <mark style={{background: classname === 'cyrillic' ? '#ed3614' : '#4ba4dd'}} key={index}>
        {matches[index]}
      </mark>,
    ] : [...arr, element]), []);
  }

  const textRender = (text) => {
    return highlightPattern(text.str)
  }

  return (
    <PdfViewer file={file} handlePage={handlePage} page={page} textRender={textRender} onLoadHandler={onLoadHandler} size={size}/>
  );
};

export default HighlightPdf;
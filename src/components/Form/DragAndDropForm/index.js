import React, {useEffect, useRef, useState} from 'react';

import './style.css'

const DragAndDropForm = ({handlePdfFile, pdfReader, setIsLoading}) => {
  const dropBlockRef = useRef(null);
  const pdfFileRef = useRef(null)

  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    if(dropBlockRef.current) {
      dropBlockRef.current.addEventListener('dragenter', handleDragIn)
      dropBlockRef.current.addEventListener('dragleave', handleDragOut)
      dropBlockRef.current.addEventListener('dragover', handleDrag)
      dropBlockRef.current.addEventListener('drop', handleDrop)
      return () => {
        dropBlockRef.current.removeEventListener('dragenter', handleDragIn)
        dropBlockRef.current.removeEventListener('dragleave', handleDragOut)
        dropBlockRef.current.removeEventListener('dragover', handleDrag)
        dropBlockRef.current.removeEventListener('drop', handleDrop)
      }
    }
  }, [dropBlockRef.current])

  useEffect(() => {
    if(pdfFileRef.current?.length){
      console.log(pdfFileRef.current)
    }
  }, [pdfFileRef.current?.length])

  const handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if(e.dataTransfer?.items){
      setDragging(true)
    }
  }

  const handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
    if(e.dataTransfer.files){
      setIsLoading(true)
      pdfReader.readPdfFileAndReturnBase64(e.dataTransfer.files[0]).then(res => handlePdfFile(res)).then(() => setIsLoading(false))
    }
  }

  return (
    <form className={`form__dragndrop ${dragging ? 'form__dragndrop_active' : ''}`}>
      <div ref={dropBlockRef} id={'dropZone'}>
        Для загрузки, перетащите файлы сюда.
      </div>
    </form>
  );
};

export default DragAndDropForm;
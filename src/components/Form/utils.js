export class PdfFileReader {
  constructor() {
    if(typeof PdfFileReader.instance === 'object'){
      return PdfFileReader.instance
    }
    this.fileReader = new FileReader();
    PdfFileReader.instance = this;
    return this;
  }

  readPdfFileAndReturnBase64(file){
    return new Promise((resolve, reject) => {
      this.fileReader.readAsDataURL(file)
      this.fileReader.onload = (e) => {
        resolve(e.target.result)
      }
      this.fileReader.onerror = (e) => reject(e)
    })
  }
}
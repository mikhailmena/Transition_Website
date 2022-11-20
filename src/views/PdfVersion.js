import React, {useState} from "react";
import Pdf from '../assets/Tranpdf.pdf'
import image from '../assets/PDFtitle.png'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import './Sample.css'

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
  };

const PdfVersion = () => {
    const [file, setFile] = useState({Pdf});
    const [numPages, setNumPages] = useState(null);
  
    function onFileChange(event) {
      setFile({Pdf});
    }
  
    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
      setNumPages(nextNumPages);
    }
    return (
        
        <div className="Example">
        <header>
          <img src={image} style={{height: 220}}/>
          
         
        </header>
        <div className="Example__container">
          <div className="Example__container__load">
            {/* <label htmlFor="file">Load from file:</label>{' '} */}
            {/* <input onChange={onFileChange} type="file" /> */}
             <a id="pdflink" href = {Pdf} target = "_blank">Download Pdf</a>
          </div>
          <div className="Example__container__document">
            <Document file={Pdf} onLoadSuccess={onDocumentLoadSuccess} options={options}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
            
          </div>
        </div>
      </div>
    ) 
}

export default PdfVersion;

{/*  */}
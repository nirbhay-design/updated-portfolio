import React from 'react'
import './showres.css'
import pdf from './Resume.pdf'
import { Document, Page,pdfjs } from 'react-pdf';
function Showresume({toggle}) {
    return (
        <div className='resume__div'>
            
            <iframe src={pdf} frameborder="0" className={(toggle)?"pdf__embed":"pdf__hidden"}></iframe>
            {/* <embed src="./Resume.pdf" type="application/pdf" className='pdf__embed'/> */}
            
        </div>
    )
}

export default Showresume

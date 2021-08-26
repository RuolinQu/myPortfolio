import React, { useState } from 'react';

import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';


// import Pdf from '../../assets/files/Jay_Qu_Resume.pdf'
import Pdf from '../../assets/files/Jay_Qu.pdf'

import { Worker } from '@react-pdf-viewer/core';

export default function Resume() {

  
    return (

        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <div
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    height: '750px',
                }}
            >
                <Viewer fileUrl={Pdf} />
            </div>
        </Worker>
      
    );
}

import React, {useState} from 'react'
import './Homepage.css'
import bookImg from '../assets/book.png'
import resetImg from '../assets/resetImg.png'
import runImg from '../assets/runImg.png'
import prntImg from '../assets/printer.png'
import dollarImg from '../assets/dollar.png'

export const Runbox = ({code, setCode, output, handleRun}) => {
  return (
    <>
        <div className='runbox'>
          <div className="title">
            <img src={bookImg} alt="Material" />
            Select the Code
          </div>

          <select className='codetype' onChange={(e) => setCode(e.target.value)} value={code} >
            <option value='ACI'>ACI</option>
            <option value='EURO'>EURO</option>
            <option value='CAN'>CAN</option>
          </select>

          <div className='runner'>
            <div className='runneroptions'>
              <button>Optimize</button>
              <button>Compare</button>
            </div>

            <div className='finalbuttons'>
              <button onClick={handleRun}><img src={runImg}></img></button>
              <button><img src={resetImg}></img></button>
            </div>
            <div className='finalbuttonlabels'>
              <span>Run</span> <span>Reset</span>
            </div>

            <div className={`output ${output === '✅ SAFE' ? 'safe' : 'unsafe'}`}>
              {output}
            </div>
            <button className='printpdf'><img src={prntImg}></img>Print PDF</button>
            {output === '✅ SAFE' ? (
              <button className='dollar printpdf'><img src={dollarImg} alt="Estimate" />Estimate</button>
            ) : null}

          </div>

        </div>
    </>
  )
}

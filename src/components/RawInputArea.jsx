import React, { useContext } from 'react'
import { markdownContext } from '../context/context';
import ReactMarkdown from 'react-markdown';

import './RawInputArea.css'

function RawInputArea() {
  const { data }  = useContext(markdownContext);

  return (
    <div className='output' id='output'>
      <ReactMarkdown children={data} />
    </div>
  )
}

export default RawInputArea
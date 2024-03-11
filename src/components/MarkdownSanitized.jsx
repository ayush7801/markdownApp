import React from 'react'
import { useContext } from 'react';
import './MarkdownSanitized.css'
import { markdownContext } from '../context/context';

function MarkdownSanitized() {
  const { handleChange } = useContext(markdownContext);
  
  return (
    <textarea id="input" placeholder='Input Your Markdown Here <> ! <>' onChange={(e) => {handleChange(e.target.value)}}></textarea>
  )
}

export default MarkdownSanitized
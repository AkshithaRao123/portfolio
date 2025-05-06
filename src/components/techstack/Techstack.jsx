import React from 'react';
import './techstack.css';
import { css, mongodb, mysql, html, javascript, fastapi, node, sklearn, tensorflow, python } from './imports';

const Techstack = () => {
  return (
      <div style={{padding:'5%'}} className='pf__techstack shadow-drop-center'>
        <h3 id='caption'>My tech stack:</h3>
        <div><img src={html} alt='HTML' /></div>
        <div><img src={css} alt='CSS' /></div>
        <div><img src={python} alt='Python' /></div>
        <div><img src={mongodb} alt='MongoDB' /></div>
        <div><img src={javascript} alt='Javascript' /></div>
        <div><img src={sklearn} alt='scikit-learn' /></div>
        <div><img src={tensorflow} alt='Tensorflow' /></div>
        <div><img src={fastapi} alt='fastapi' /></div>
        <div><img src={mysql} alt='MySQL' /></div>
        <div><img src={node} alt='Node.js' /></div>
      </div>
  )
}

export default Techstack

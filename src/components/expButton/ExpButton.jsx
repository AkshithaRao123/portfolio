import React from 'react';
import './expButton.css';

const ExpButton = ({heading, description, id, url}) => {  // props
  return (
    <div className='pf__experience shadow-drop-center' id={id}>
      <h3 id='caption'>{heading}</h3>
      <p id="exp">{description}</p>
      <a href='../containers/certifications'><button type='button'>View {heading}</button></a>
    </div>
  )
}

export default ExpButton
import React from 'react';
import './head.css';

function Head({ title }) {
  console.log('Head');
  return (
      <div className='app__head'>
        <h1>{title}</h1>
      </div>
  )
}

export default React.memo(Head);

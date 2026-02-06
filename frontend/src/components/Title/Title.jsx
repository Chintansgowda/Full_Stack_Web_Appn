

import React from 'react';
import './Title.css';

const Title = ({ subTitle, title }) => {
  return (
    <div className='title'>
      <h2>{title}</h2>        {/* Main title on top */}
      <p>{subTitle}</p>       {/* Subtitle below */}
    </div>
  );
};

export default Title;
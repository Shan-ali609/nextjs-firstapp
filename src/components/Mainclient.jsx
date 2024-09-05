import React from 'react';
import "../style/mainclient.css";

export default function Mainclient() {
  return (
    <div className='main-clients'>
      <h1 className='main-clients-heading'>Our Main Clients</h1>
      <div className='flex-box'>
        <img src='/images/html-5.png' alt='HTML5' />
        <img src='/images/css-3.png' alt='CSS3' />
        <img src='/images/js.png' alt='JavaScript' />
        <img src='/images/react.png' alt='React' />
      </div>
    </div>
  );
}

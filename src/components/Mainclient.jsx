import React from 'react';
import Image from 'next/image';
import "../style/mainclient.css";

export default function Mainclient() {
  return (
    <div className='main-clients'>
      <h1 className='main-clients-heading'>Our Main Clients</h1>
      <div className='flex-box'>
        <Image src='/images/css-3.png' alt='CSS3' />
        <Image src='/images/html-5.png' alt='HTML5' />
        <Image src='/images/js.png' alt='JavaScript' />
        <Image src='/images/react.png' alt='React' />
      </div>
    </div>
  );
}

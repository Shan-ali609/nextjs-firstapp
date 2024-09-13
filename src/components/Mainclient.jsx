import React from 'react';
import Image from 'next/image';
import "../style/mainclient.css";

export default function Mainclient() {
  return (
    <div className='main-clients'>
      <h1 className='main-clients-heading'>Our Main Clients</h1>
      <div className='flex-box'>
        <Image src='/images/css-3.png'
         height={300}
         width={390}
        alt='CSS3' />
        <Image src='/images/html-5.png' 
           height={300}
           width={390}
        alt='HTML5' />
        <Image src='/images/js.png'
           height={300}
           width={390}
        alt='JavaScript' />
        <Image src='/images/react.png'
           height={300}
           width={390}
        alt='React' />
      </div>
    </div>
  );
}

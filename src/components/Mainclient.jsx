// import React from 'react';
// import Image from 'next/image';
// import "../style/mainclient.css";

// export default function Mainclient() {
//   return (
//     <div className='main-clients'>
//       <h1 className='main-clients-heading'>Our Main Clients</h1>
//       <div className='flex-box'>
//         <Image src='/images/css-3.png'
//          height={300}
//          width={390}
//         alt='CSS3' />
//         <Image src='/images/html-5.png' 
//            height={300}
//            width={390}
//         alt='HTML5' />
//         <Image src='/images/js.png'
//            height={300}
//            width={390}
//         alt='JavaScript' />
//         <Image src='/images/react.png'
//            height={300}
//            width={390}
//         alt='React' />
//       </div>
//     </div>
//   );
// }
"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import "../style/mainclient.css";

export default function Mainclient() {
  useEffect(() => {
    const animationDuration = 100; // Total animation duration in milliseconds
    const fastDuration = 200; // Fast transition duration in milliseconds
    
    const flexBoxInner = document.querySelector('.flex-box-inner');
    
    // Function to adjust animation speed
    const adjustAnimationSpeed = () => {
      const totalWidth = flexBoxInner.scrollWidth;
      const containerWidth = flexBoxInner.parentElement.offsetWidth;
      
      if (totalWidth > containerWidth) {
        flexBoxInner.style.animation = `scroll ${animationDuration}ms linear infinite`;
        flexBoxInner.addEventListener('animationiteration', () => {
          flexBoxInner.style.animation = `scroll ${fastDuration}ms linear`;
          setTimeout(() => {
            flexBoxInner.style.animation = `scroll ${animationDuration}ms linear infinite`;
          }, fastDuration);
        });
      }
    };
    
    adjustAnimationSpeed();
    
    // Clean up event listener
    return () => {
      const flexBoxInner = document.querySelector('.flex-box-inner');
      if (flexBoxInner) {
        flexBoxInner.removeEventListener('animationiteration', adjustAnimationSpeed);
      }
    };
  }, []);

  return (
    <div className='main-clients'>
      <h1 className='main-clients-heading'>Our Main Clients</h1>
      <div className='flex-box'>
        <div className='flex-box-inner'>
          <Image src='/images/css-3.png' height={60} width={60} alt='CSS3' />
          <Image src='/images/html-5.png' height={60} width={60} alt='HTML5' />
          <Image src='/images/js.png' height={60} width={60} alt='JavaScript' />
          <Image src='/images/react.png' height={60} width={60} alt='React' />
 
        </div>
      </div>
    </div>
  );
}


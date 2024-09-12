import React from 'react'
import Image from 'next/image'
import '@/components/pageimagealignment/alignment1.css'


export default function Imagealignment1() {
  return (
    <div>




   <div className='image-alignment'>
   <Image src='https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2013/03/image-alignment-580x300.jpg'
   height={300}
   width={580}
   alt='first image'
     />
     </div>

  <div className='para-3' >
    <p  className='para3' >The image above happens to be <span className='span-text'>Centered.</span> </p>
  </div>


    </div>
  )
}

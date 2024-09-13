import React from 'react'
import Image from 'next/image'
import '@/style/gallery.css'
export default function Gallery() {
  return (
    <div>
      


      <div className='gallery-grid'>
        <Image  src="/images/2.jpg" 
         height={300}
         width={300}
        alt="gallery" />
        <Image  src="/images/1.jpg" 
           height={300}
           width={300}
        alt="gallery" />
        <Image src="/images/3.jpg"
           height={300}
           width={300}
        alt="gallery" />
        <Image  src="/images/4.jpg"
           height={300}
           width={300}
        alt="gallery" />
        <Image  src="/images/5.jpg"
           height={300}
           width={300}
        alt="gallery" />
        <Image  src="/images/6.jpg" 
          height={300}
          width={300}
        alt="gallery" />
        <Image  src="/images/7.jpg"
          height={300}
          width={300}
        alt="gallery" />
        <Image src="/images/8.jpg"
           height={300}
           width={300}
        alt="gallery" />
        <Image src="/images/9.jpg"
           height={300}
           width={300}
        alt="gallery" />
        <Image src="/images/10.jpg"
          height={300}
          width={300}
        alt="gallery" />
      </div>
    </div>
  )
}

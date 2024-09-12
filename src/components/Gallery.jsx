import React from 'react'
import Image from 'next/image'
import '@/style/gallery.css'
export default function Gallery() {
  return (
    <div>
      


      <div className='gallery-grid'>
        <Image  src="/images/2.jpg" alt="gallery" />
        <Image  src="/images/1.jpg" alt="gallery" />
        <Image src="/images/3.jpg" alt="gallery" />
        <Image  src="/images/4.jpg" alt="gallery" />
        <Image  src="/images/5.jpg" alt="gallery" />
        <Image  src="/images/6.jpg" alt="gallery" />
        <Image  src="/images/7.jpg" alt="gallery" />
        <Image src="/images/8.jpg" alt="gallery" />
        <Image src="/images/9.jpg" alt="gallery" />
        <Image src="/images/10.jpg" alt="gallery" />
      </div>
    </div>
  )
}

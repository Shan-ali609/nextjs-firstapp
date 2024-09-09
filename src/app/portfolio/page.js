import Bloghead from '@/components/blog/Bloghead'
import Gallery from '@/components/Gallery'
import React from 'react'
import '@/app/portfolio/gallery.css'

export default function portfolio() {
  return (
    <div>
   <Bloghead portfoliotitle="Portfolio"/>  
   <div className='gallery-section'>    <Gallery />    </div> 
  
    </div>
  )
}

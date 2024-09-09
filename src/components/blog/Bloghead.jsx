import React from 'react'
import '@/style/blogcss/blogsection.css'
export default function Bloghead({blogtitle,portfoliotitle,shoptittle,pagetitle}) {
  return (
    <div>
        <div className="blog-section">
        <h2 className="blog-sec">{blogtitle}{portfoliotitle}{shoptittle}{pagetitle}</h2>
      </div>
    </div>
  )
}

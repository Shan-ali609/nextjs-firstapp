import React from 'react'
import '@/style/blogcss/blogsection.css'
export default function Bloghead({blogtitle,portfoliotitle,shoptittle,pagetitle,abouttitle,lvl1title,level2,level2a,level2b,pagemarkup}) {
  return (
    <div>
        <div className="blog-section">
        <h2 className="blog-sec">{blogtitle}{portfoliotitle}{shoptittle}{pagetitle}{abouttitle}{lvl1title}{level2}{level2a} {level2b}
           {pagemarkup}

        </h2>
      </div>
    </div>
  )
}

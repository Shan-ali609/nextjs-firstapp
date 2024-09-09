import Blogsection from '@/components/blog/Blogsection'
import Searchsection from '@/components/blog/Searchsection'

import '@/app/blog1/page.css'
import React from 'react'
import Bloghead from '@/components/blog/Bloghead'
import Recentposts from '@/components/blog/Recentposts'
import Categories from '@/components/blog/Categories'



  
export default function blog1() {
  

  

  return (

    <>
    <div>
    <Bloghead blogtitle="Blog" />
    </div>
    <div className='blog-sectionfull'>
   <div>
    
      <Blogsection  />
      </div>
       <div>
       <Searchsection /> 
       <Recentposts />
       <Categories />
       </div>
    </div>

   

    </>
  )
}

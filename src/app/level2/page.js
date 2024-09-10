import Abouttests from '@/components/aboutthetests/Abouttests'
import Bloghead from '@/components/blog/Bloghead'
import Recentposts from '@/components/blog/Recentposts'
import Searchsection from '@/components/blog/Searchsection'
import Categories from '@/components/blog/Categories'
import '@/app/blog1/page.css'
import React from 'react'

export default function page() {
  return (
    <>

<div>
      <Bloghead level2 = 'Level 2' />  
    </div>
    
    
    
    <div className='blog-sectionfull'>

    <div>
      <Abouttests level2 = 'Level 2' 
      level2para = 'Level 2 of the reverse hierarchy test.'
      /> 
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

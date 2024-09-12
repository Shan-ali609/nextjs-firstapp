import Abouttests from '@/components/aboutthetests/Abouttests'
import Bloghead from '@/components/blog/Bloghead'
import Headings from '@/components/pagemarkup/Headings'
import React from 'react'
import Recentposts from '@/components/blog/Recentposts'
import Searchsection from '@/components/blog/Searchsection'
import Categories from '@/components/blog/Categories'
import '@/app/blog1/page.css'
import Leavereply from '@/components/pageimagealignment/Leavereply'

export default function page() {
  return (
    <>
    <div>
      <Bloghead pagemarkup = 'Page Markup And Formatting' />
     
    </div>
  

     <div className='blog-sectionfull'>
      
      <div>
      <Abouttests pagemarkupheading = 'Page Markup And Formatting' />
      <Headings />
      <Leavereply />
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

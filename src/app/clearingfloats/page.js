import Abouttests from '@/components/aboutthetests/Abouttests'
import Bloghead from '@/components/blog/Bloghead'
import Recentposts from "@/components/blog/Recentposts";
import Searchsection from "@/components/blog/Searchsection";
import Categories from "@/components/blog/Categories";
import "@/app/blog1/page.css";
import React from 'react'

export default function page() {
  return (
    <>
    <div>
        <Bloghead clearingtitle = 'Clearing Floats' />
    </div>
   
   <div className='blog-sectionfull'>
  <div>
   <Abouttests clearingheading = 'Clearing Floats'
      clearpara = 'The last item in this page content is a floated image. Make sure any elements after it are clearing properly.'
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

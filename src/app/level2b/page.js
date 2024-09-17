import React from 'react'
import Abouttests from '@/components/aboutthetests/Abouttests'
import Bloghead from '@/components/blog/Bloghead'
import Recentposts from '@/components/blog/Recentposts'
import Searchsection from '@/components/blog/Searchsection'
import Categories from '@/components/blog/Categories'
import '@/app/blog1/page.css'
import Leavereply from '@/components/pageimagealignment/Leavereply'

export default function page() {
  return (
    <>
      


   <div> <Bloghead level2b = 'Level 2b'/> </div>
   

   <div className='blog-sectionfull'>

   <div>
 
   <Abouttests  
   level2btitle = 'Level 2b'
     lvl2bpara = '(lorem ipsum)'
   />
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

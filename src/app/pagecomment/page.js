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
      <Bloghead pagecoment = 'Page with comments disabled' />
     
    </div>
  

     <div className='blog-sectionfull'>
      
      <div>
      <Abouttests pagecommenthead = 'Page with comments disabled' 
       pagecomment1 = 'This static Page is set not to allow comments. Verify that the Page does not display a comment list, comment reply links, or comment reply form.'
       pagecoment2 = 'Also, verify that the Page does not display a “comments are closed” type message. Such messages are not suitable for static Pages, and should only be used on blog Posts.'
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
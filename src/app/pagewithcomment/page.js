import Abouttests from '@/components/aboutthetests/Abouttests'
import Bloghead from '@/components/blog/Bloghead'
import Headings from '@/components/pagemarkup/Headings'
import React from 'react'
import Recentposts from '@/components/blog/Recentposts'
import Searchsection from '@/components/blog/Searchsection'
import Categories from '@/components/blog/Categories'
import '@/app/blog1/page.css'
import Leavereply from '@/components/pageimagealignment/Leavereply'
import Comments from '@/components/pagewithcomments/Comments'

export default function page() {
  return (
    <>
    <div>
      <Bloghead pagewithcoment = 'Page with comments' />
     
    </div>
  

     <div className='blog-sectionfull'>
      
      <div>
      <Abouttests pagewithcommenthead = 'Page with comments ' 
       pagecomment1 = 'Repository-hosted Themes are required to support display of comments on static Pages as well as on single blog Posts.  This static Page has comments, and these comments should be displayed.'
       
      />
     <Comments />
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
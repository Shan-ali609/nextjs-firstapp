import Abouttests from '@/components/aboutthetests/Abouttests'
import Bloghead from '@/components/blog/Bloghead'
import Recentposts from '@/components/blog/Categories'
import Searchsection from '@/components/blog/Searchsection'
import Categories from '@/components/blog/Categories'
import '@/app/aboutthetest/pagetests.css'
import React from 'react'

export default function page() {
  return (
    <>
    <div>
      <Bloghead testtitle="About The Tests"/>
    </div>
        
      <div className='aboutthe-tests'  >
       
       <div> <Abouttests />    </div>

        <div>   
            <Searchsection />
            <Recentposts />
            <Categories />

        </div>


      </div>
        

    </>
  )
}

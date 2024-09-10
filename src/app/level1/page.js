
import Abouttests from '@/components/aboutthetests/Abouttests'
import Bloghead from '@/components/blog/Bloghead'
import Recentposts from '@/components/blog/Recentposts'
import Searchsection from '@/components/blog/Searchsection'
import Categories from '@/components/blog/Categories'
import '@/app/blog1/page.css'
import React from 'react'

export default function page() {
  return (
    <div>
     <Bloghead lvl1title = 'Level 1'/>
   <div className='blog-sectionfull'>
     <div>
     <Abouttests  
     abouttitle = 'Level 1' 
     aboutPara="Level 1 of the reverse hierarchy test. 
            This is to make sure the importer correctly assigns parents and children 
            even when the children come first in the export file." 
        showContent={false}
        />
      </div>
    
    <div>
    
   <Searchsection />
   <Recentposts />
   <Categories />


      </div>

      </div>
    </div>
  )
}



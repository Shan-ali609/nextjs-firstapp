import React from 'react'
 import '@/style/blogcss/recentposts.css'
export default function Recentposts() {
  const recents = [{
    tittle: 'Edge Case'
  },{
    tittle: 'Markup'
  },{
    tittle: 'Media'
  },{
    tittle: 'News'
  },{
    tittle: 'Post Formats'
  },{
    tittle: 'Template'
  },

];
  return (
    <div>
      <div className='posts-heading'>Categories</div>
    
  {recents.map((items,index)=>(

<div  className='nomoretag' key={index}>
        <h1 className='moretag'>{items.tittle}</h1>
      </div>
  ))}

      
    </div>
  )
}

import React from 'react'
 import '@/style/blogcss/recentposts.css'
export default function Recentposts() {
  const recents = [{
    tittle: 'Template: More Tag'
  },{
    tittle: 'Hello World'
  },{
    tittle: 'Markup: HTML Tags and Formatting'
  },{
    tittle: 'Markup: Image Alignment'
  },{
    tittle: 'Template: Featured Image (Horizontal)'
  },{
    tittle: 'Template: sticky'
  },

];
  return (
    <div>
      <div className='posts-heading'>Recent Posts</div>
    
  {recents.map((items,index)=>(

<div  className='nomoretag' key={index}>
        <h1 className='moretag'>{items.tittle}</h1>
      </div>
  ))}

      
    </div>
  )
}

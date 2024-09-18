import React from 'react'
import Image from 'next/image'
import '@/components/pagewithcomments/comment.css'
export default function Comments() {
    const comment = [
        {
          img: 'https://secure.gravatar.com/avatar/ef331c6e33890a8fa68e36cb7a7f0f87?s=75&d=mm&r=g',
          firstname: 'tellyworthtest2',
          date: 'September 4, 2007 at 10:49 am',
          section:'Contributor comment.'
        },
        {
            img: 'https://secure.gravatar.com/avatar/ef331c6e33890a8fa68e36cb7a7f0f87?s=75&d=mm&r=g',
            firstname: 'Anon',
            date: 'September 4, 2007 at 10:49 am',
            section:'Anonymous comment.'
        },
        {
            img: 'https://secure.gravatar.com/avatar/ef331c6e33890a8fa68e36cb7a7f0f87?s=75&d=mm&r=g',
            firstname: 'John Doe',
            date: 'September 4, 2007 at 10:49 am',
            section:'Author comment.'
        },
    ];


  return (
    <div>


   
   {comment.map((items,prop)=>(
      <div className='comments-here' key={prop}>
      <div className='font-img' >
   <Image src = {items.img}
   className='font-image1'
   alt ='good'
    height = {100}
    width = {80}
   />
      </div>

      <div className='about-dot'>
          <h2 className='jloo'>{items.firstname}</h2>
          <p className='go-get'>{items.date} <span><button type="button" className='small-bt'>click</button></span> </p>
          <p className='get-go'>{items.section}</p>
           

      </div>
  </div>
   ))};

   













    </div>
  )
}

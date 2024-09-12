import React from 'react'
import '@/components/pageimagealignment/alignment1.css'
import Image from 'next/image'
export default function Fullimagesectoin({showcaptoins}) {
  return (
    <div>
      

    <div>
     <Image src='https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2013/03/image-alignment-1200x4002.jpg'
     height={400}
     width={1200}
     alt='good'
      />

    </div> 

     
           <div>
           <p className='paragraph2'>The image above, though 1200px wide, should not overflow the content area. 
               It should remain contained with no visible disruption to the flow of content.</p>
       </div>
    
   

    </div>
  )
}

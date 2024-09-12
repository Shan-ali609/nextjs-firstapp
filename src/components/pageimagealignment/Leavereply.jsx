import React from 'react'
import "@/components/pageimagealignment/alignment1.css";
export default function Leavereply() {
  return (
    <div>
      


   <div>
      <form  className='form-data'>
     <label htmlFor="">Leave a Reply</label>
     <p>Your email address will not be published. Required fields are marked *</p>
      <input type="text" value="" placeholder='Your Name' />
      <input type="Email" value="" placeholder='Email address' />
      <input type="text" value="" placeholder='Your Website (Optional)' />
      <textarea name="comment" id="" placeholder='Comment'></textarea>
       
      <button type="button" className="btt">
                LEAVE COMMENT
              </button>

      </form>
   </div>



    </div>
  )
}

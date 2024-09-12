import React from 'react'
import "@/components/pageimagealignment/alignment1.css";
export default function Leavereply() {
  return (
    <div>
      


   <div>
      <form   className='form-data'>
     <label htmlFor="">Leave a Reply</label>
     <p>Your email address will not be published. Required fields are marked *</p>
      <input type="text"  placeholder='Your Name' />
      <input type="Email"  placeholder='Email address' />
      <input type="text"  placeholder='Your Website (Optional)' />
      <textarea className='comment-set' name="comment" id="" placeholder='Comment'></textarea>
       
      <button type="button" className="btt">
                LEAVE COMMENT
              </button>

      </form>
   </div>



    </div>
  )
}

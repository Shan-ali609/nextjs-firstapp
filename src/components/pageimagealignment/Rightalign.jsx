import React from "react";
import Image from "next/image";
import "@/components/pageimagealignment/alignment1.css";
export default function Section2({bigimgurl,showcontent ,showcaption}) {
  return (
    <div>
      <div className="main-box">
       
       <div className="image-box">
         <Image
         className="img-float-right"
           src={ bigimgurl}
           height={150}
           width={150}
           alt="good"
         />
         {showcaption && <>
         
        <p className="paragraph1">Itty-bitty caption</p> </>}
       </div>
 
       
      <div className="para-content">

       <p className="paragraph1">
         The rest of this paragraph is filler for the sake of seeing the text
         wrap around the 150 150 image, which is left aligned.{" "}
         <span className="span-text">left aligned.</span>{" "}
       </p>
       <p className="paragraph1">
         As you can see the should be some space above, below, and to the right
         of the image. The text should not be creeping on the image. Creeping
         is just not right. Images need breathing room too. Let them speak like
         you words. Let them do their jobs without any hassle from the text. In
         about one more sentence here, we ll see that the text moves from the
         right of the image down below the image in seamless transition. Again,
         letting the do it s thang. Mission accomplished!
       </p>
       </div>   


     </div>


  {showcontent && (
 <div>
 <div>
   <p className="paragraph1">And just when you thought we were done, we’re going to do them all over again with captions!</p>
 </div>



  <div className="Caption-love" >

   <Image src={bigimgurl }
    alt="good"
     width={580}
     height={300}
   /> 
   <h2 className="caption-img">Look at 580×300 getting some caption love.</h2>
  </div> 

  </div>

  )}
    


    <div className="main-box">
       
       <div className="image-box-R">
         <Image
         className="img-flt-R"
           src='https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2013/03/image-alignment-150x150.jpg'
           height={150}
           width={150}
           alt="good"
         />
        <label htmlFor="" className="caption-style" >Itty-bitty caption.</label>
       </div>
 
       
      <div className="para-content-repeat">

       <p className="paragraph1">
         The rest of this paragraph is filler for the sake of seeing the text
         wrap around the 150 150 image, which is left aligned.{" "}
         <span className="span-text">left aligned.</span>{" "}
       </p>
       <p className="paragraph1">
         As you can see the should be some space above, below, and to the right
         of the image. The text should not be creeping on the image. Creeping
         is just not right. Images need breathing room too. Let them speak like
         you words. Let them do their jobs without any hassle from the text. In
         about one more sentence here, well see that the text moves from the
         right of the image down below the image in seamless transition. Again,
         letting the do its thang. Mission accomplished!
       </p>
       </div>   


     </div>



     <div>
      

      <div className="full-image-width">
       <Image src='https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2013/03/image-alignment-1200x4002.jpg'
       height={400}
       width={1200}
       alt="good"
        />
    <label htmlFor="" className="caption-style" >Massive image comment for your eyeballs.</label>
      </div> 
  
       
             <div>
             <p className='paragraph2'>The image above, though 1200px wide, should not overflow the content area. 
                 It should remain contained with no visible disruption to the flow of content.</p>
         </div>
      
     
  
      </div>



      <div className="main-box">
       
       <div className="repeat-section-for">
         <Image
         className="img-float-right"
           src={ bigimgurl}
           height={150}
           width={150}
           alt="good"
         />
         
         
        <p className="paragraph1 text-center pt-8" >Feels good to be right all the time.</p> 
       </div>
 
       
      <div className="para-content">

       <p className="paragraph1">
         The rest of this paragraph is filler for the sake of seeing the text
         wrap around the 150 150 image, which is left aligned.{" "}
         <span className="span-text">left aligned.</span>{" "}
       </p>
       <p className="paragraph1">
         As you can see the should be some space above, below, and to the right
         of the image. The text should not be creeping on the image. Creeping
         is just not right. Images need breathing room too. Let them speak like
         you words. Let them do their jobs without any hassle from the text. In
         about one more sentence here, well see that the text moves from the
         right of the image down below the image in seamless transition. Again,
         letting the do its thang. Mission accomplished!
       </p>
       </div>   


     </div>







      
    </div>
  );
}

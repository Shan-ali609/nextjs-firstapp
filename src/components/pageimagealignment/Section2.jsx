import React from "react";
import Image from "next/image";
import "@/components/pageimagealignment/alignment1.css";
export default function Section2({ leftimgurl }) {
  return (
    <div>
      
      <div className="main-box">
       
        <div className="image-box">
          <Image
          className="img-flt"
            src={leftimgurl}
            height={150}
            width={150}
          />
         
        </div>
  
        
       <div className="para-content">

        <p className="paragraph1">
          The rest of this paragraph is filler for the sake of seeing the text
          wrap around the 150×150 image, which is left aligned.{" "}
          <span className="span-text">left aligned.</span>{" "}
        </p>
        <p className="paragraph1">
          As you can see the should be some space above, below, and to the right
          of the image. The text should not be creeping on the image. Creeping
          is just not right. Images need breathing room too. Let them speak like
          you words. Let them do their jobs without any hassle from the text. In
          about one more sentence here, we’ll see that the text moves from the
          right of the image down below the image in seamless transition. Again,
          letting the do it’s thang. Mission accomplished!
        </p>
        </div>   


      </div>

       <div>
        <p className="paragraph12">
          And now for a{" "}
          <span className="span-text">massively large image. </span> It also has
          <span className="span-text"> no alignment </span>
        </p>
      </div> 
    </div>
  );
}

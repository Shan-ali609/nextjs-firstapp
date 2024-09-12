import React from "react";
import Image from "next/image";
import "@/components/pageimagealignment/alignment1.css";
export default function Section2({bigimgurl,showcontent }) {
  return (
    <div>
      <div>
        <Image
          className="image-right"
          src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2013/03/image-alignment-300x200.jpg"
          height={200}
          width={300}
        />

        <p className="paragraph1">
          And now we’re going to shift things to the right align. Again, there
          should be plenty of room above, below, and to the left of the image.
          Just look at him there… Hey guy! Way to rock that right side. I don’t
          care what the left aligned image says, you look great. Don’t let
          anyone else tell you differently.
        </p>
        <p className="paragraph1">
          In just a bit here, you should see the text start to wrap below the
          right aligned image and settle in nicely. There should still be plenty
          of room and everything should be sitting pretty. Yeah… Just like that.
          It never felt so good to be right.
        </p>
      </div>


  {showcontent && (
 <div>
 <div>
   <p className="paragraph1">And just when you thought we were done, we’re going to do them all over again with captions!</p>
 </div>



  <div className="Caption-love" >

   <Image src={bigimgurl }
    
     width={580}
     height={300}
   /> 
   <h2 className="caption-img">Look at 580×300 getting some caption love.</h2>
  </div>

  </div>

  )}
    



      
    </div>
  );
}

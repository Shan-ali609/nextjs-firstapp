import React from "react";
import Image from "next/image";
import "../style/seosection.css";
function Seosection() {
  return (
    <section>
      <div className="main">
       
       
        <div className="img-size">
          <Image src="/images/SEOIMAGE.png"
            width={672}
            height={368}
            alt="good"
          />
        </div>
      
      
        <div className="txt-section">
          <h3>SEO Friendly</h3>
          <p > 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam
            feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et
            interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula
            id ultricies.
          </p>
          <button type="button" className="btn">READ MORE</button>
        </div>


      </div>
    </section>
  );
}

export default Seosection;

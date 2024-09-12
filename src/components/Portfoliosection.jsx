import React from "react";
import Image from "next/image";
import "../style/portfoliodection.css";

function Portfoliosection() {
  return (
    <section>
      <div className="portfolio-main">


        <div className="text-section">
          <h3>Portfolio Section </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam
            feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et
            interdum.
          </p>
          <button type="button" className="btt">SEE IT IN ACTION</button>
        </div>



        <div className="image-sec">
            <Image src="/images/portfolio.png"
             height={368}
             width={672}
             alt="goood"
            />
        </div>


      </div>
    </section>
  );
}

export default Portfoliosection;

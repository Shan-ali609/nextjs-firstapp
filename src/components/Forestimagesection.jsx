import React from "react";
import Image from "next/image";
import "../style/forestimagesection.css";
export default function Forestimagesection() {
  return (
    <>
      <div>
        <div className="forest">
          <Image className="forest-size" src="/images/forest.jpg"
           width={500}
           height={400}
          alt="forest-image" />
        </div>
      </div>

      <div>
        <div className="projects">
          <h3>Our Latest Projects</h3>
          <p>Here is our latest projects. You&apos;ll love them!</p>
        </div>
      </div>

    

    </>
  );
}

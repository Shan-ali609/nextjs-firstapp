import React from "react";
import "../style/forestimagesection.css";
export default function Forestimagesection() {
  return (
    <>
      <div>
        <div className="forest">
          <img src="/images/forest.jpg" alt="forest-image" />
        </div>
      </div>

      <div>
        <div className="projects">
          <h3>Our Latest Projects</h3>
          <p>Here is our latest projects. You&apos;ll love them!</p>
        </div>
      </div>

    

      <div class="gallery-grid">
        <img src="/images/2.jpg" alt="gallery" />
        <img src="/images/1.jpg" alt="gallery" />
        <img src="/images/3.jpg" alt="gallery" />
        <img src="/images/4.jpg" alt="gallery" />
        <img src="/images/5.jpg" alt="gallery" />
        <img src="/images/6.jpg" alt="gallery" />
        <img src="/images/7.jpg" alt="gallery" />
        <img src="/images/8.jpg" alt="gallery" />
        <img src="/images/9.jpg" alt="gallery" />
        <img src="/images/10.jpg" alt="gallery" />
      </div>
    </>
  );
}

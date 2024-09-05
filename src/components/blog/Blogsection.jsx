import React from "react";
import "@/style/blogcss/blogsection.css";
import Image from "next/image";
import Link from "next/link";

export default function Blogsection() {
  return (
    <>
      <div className="blog-section">
        <h2 className="blog-sec">Blog</h2>
      </div>

      <div className="blogbox">
        <div className="newlinkwidth">
          <Link className="Newslink" href="/">
            NEWS
          </Link>
        </div>

        <Image
          className="blogimg"
          src="/images/blog1.jpg"
          width={592}
          height={350}
        />
      </div>

      <div className="text-input">
        <h1 className="sticky">
          <Link href="">Template: Sticky</Link>
        </h1>
        <p className="about-date">January 7, 2016October 21, 2020by ||  <span style={{color:"#745cf9",cursor:"pointer"}}>Aigars</span> </p>
        <p className="styled-paragraph">This is a sticky post.</p>
        <p className="list-head">There are a few things to verify:</p>
        <ul className="list-items">
            
        
          <li>
            The sticky post should be distinctly recognizable in some way in
            comparison to normal posts. You can style the .sticky class if you
            are using the post_class function to generate your post classes,
            which is a best practice.
          </li>
          <li>
            The sticky post should be distinctly recognizable in some way in
            comparison to normal posts. You can style the .sticky class if you
            are using the post_class() function to generate your post classes,
            which is a best practice.
          </li>
          <li>
            They should still show up again in their chronologically correct
            postion in time, but without the sticky indicator.
          </li>
          <li>
            If you have a plugin or widget that lists popular posts or comments,
            make sure that this sticky post is not always at the top of those
            lists unless it really is popular.
          </li>
        
        </ul>
      </div>
    </>
  );
}

import React from "react";
import "@/style/blogcss/blogsection.css";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer";

export default function Blogsection() {
    const set = [
        {
        Key: "key values",
        tittle:"Template: More Tag",
        date:"March 15, 2016October 21, 2020by Aigars",
        p1 : "This content is before the more tag.",
        p2 : "Right after this sentence should be a “continue reading” button of some sort."
        },
        {
          Key: "key2",
          tittle:"Template: More Tag",
          date:"March 15, 2016October 21, 2020by Aigars",
          p1 : "This content is before the more tag.",
          p2 : "Right after this sentence should be a “continue reading” button of some sort."
        },
         
      ];
  return (
    <>
      <div className="blog-section">
        <h2 className="blog-sec">Blog</h2>
      </div>

      

      <div className="container" >
    

      <div className="section-1">

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
          <p className="about-date">
            January 7, 2016October 21, 2020by ||{" "}
            <span style={{ color: "#745cf9", cursor: "pointer" }}>Aigars</span>{" "}
          </p>
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
              If you have a plugin or widget that lists popular posts or
              comments, make sure that this sticky post is not always at the top
              of those lists unless it really is popular.
            </li>
          </ul>
        </div>

        

        </div>


         <div>
 
            <div className="search-here">
            <IoSearch className="search-bttn" />  
            <input type="text" placeholder="search..." />
     
          
            </div>

         </div>















      </div>

      <div className="">
        {set.map((item,index)=>{
            <Footer
            title={item.tittle}
            date=""
            />
        })}
      </div>
    </>
  );
}

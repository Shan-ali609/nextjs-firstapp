import Abouttests from "@/components/aboutthetests/Abouttests";
import Bloghead from "@/components/blog/Bloghead";
import Imagealignment1 from "@/components/pageimagealignment/Imagealignment1";
import Recentposts from '@/components/blog/Recentposts'
import Searchsection from '@/components/blog/Searchsection'
import Categories from '@/components/blog/Categories'
import Rightalign from '@/components/pageimagealignment/Rightalign'
import Section2 from "@/components/pageimagealignment/Section2";
import '@/app/blog1/page.css'
import React from "react";
import Fullimagesectoin from "@/components/pageimagealignment/Fullimagesectoin";
import Leavereply from "@/components/pageimagealignment/Leavereply";

export default function page() {
  return (
    <>
      <div>
        <Bloghead pagetitle="Page Image Alignnment" />
      </div>

     <div  className="blog-sectionfull">
       <div>
      <Abouttests
        alignmenttitle="Page Image Alignment"
        alignmentpara1="Welcome to image alignment! The best way to demonstrate the ebb and flow of the various
    image positioning options is to nestle them snuggly among an ocean of words Grab a paddle and let’s get started."
        alignmentpara2="On the topic of alignment, it should be noted that users can choose from the options of None, Left,
     Right, and Center. In addition, they also get the options of Thumbnail, Medium, Large & Fullsize."
     
      />
   <Imagealignment1 />
   <Section2 leftimgurl = 'https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2013/03/image-alignment-150x150.jpg'
    
   /> 

   <Fullimagesectoin  /> 
    <Rightalign  bigimgurl = 'https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2013/03/image-alignment-300x200.jpg' 
    showcontent={true}
   /> 
   
      
     <Leavereply /> 
   </div>

       <div>

       <Searchsection />
    <Recentposts />
    <Categories />

       </div>

   </div>

    </>
  );
}

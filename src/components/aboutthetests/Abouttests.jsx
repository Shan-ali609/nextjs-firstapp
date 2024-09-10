import React from "react";
import "@/style/abouttests/abouttests.css";

export default function Abouttests({ testtitle,abouttitle,aboutPara,showContent,tast,shoptitle,level2, level2para,level2a}) {
     
  return (
   <>


    <div>
      <h1 className="about-tests">{ testtitle} {abouttitle} {shoptitle}  {level2} {level2a}</h1>
      <p className="wordpress-unit">
      {tast}  {aboutPara} {level2para}
      </p >
      {showContent && (
        <>
        <h1  className="about-tests-B">WordPress Theme Development Resources</h1>

<ol className="order-list">
      <li>See Theme Development for code standards, examples of best practices, and resources for Theme development.</li>
      <li>See Theme Unit Test for a robust test suite for your Theme and get the latest version of the test data you see here.</li>
      <li>See Theme Review for a guide to submitting your Theme to the Themes Directory.</li>
  </ol>
        </>
      ) }
      
    </div>




    </>
  );
}


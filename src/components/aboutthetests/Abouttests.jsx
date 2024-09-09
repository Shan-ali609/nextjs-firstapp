import React from "react";
import "@/style/abouttests/abouttests.css";

export default function Abouttests() {
  return (
   <>


    <div>
      <h1 className="about-tests">About The Tests</h1>
      <p className="wordpress-unit">
        This site is using the standard WordPress Theme Unit Test Data for
        content. The Theme Unit Test is a series of posts and pages that match
        up with a checklist on the WordPress codex. You can use the data and
        checklist together to test your theme.
      </p >
      <h1  className="about-tests-B">WordPress Theme Development Resources</h1>
    </div>



    <div>
        <ol className="order-list">
            <li>See Theme Development for code standards, examples of best practices, and resources for Theme development.</li>
            <li>See Theme Unit Test for a robust test suite for your Theme and get the latest version of the test data you see here.</li>
            <li>See Theme Review for a guide to submitting your Theme to the Themes Directory.</li>
        </ol>
    </div>

    </>
  );
}

import Abouttests from "@/components/aboutthetests/Abouttests";
import Bloghead from "@/components/blog/Bloghead";
import Recentposts from "@/components/blog/Categories";
import Searchsection from "@/components/blog/Searchsection";
import Categories from "@/components/blog/Categories";
import "@/app/blog1/page.css";
import React from "react";

export default function page() {
  return (
    <>
      <div>
        <Bloghead abouttitle="About The Tests" />
      </div>

      <div className="blog-sectionfull">
        <div>
          {" "}
          <Abouttests
            testtitle="About The Tests"
            tast="This site is using the standard WordPress Theme Unit Test Data for
        content. The Theme Unit Test is a series of posts and pages that match
        up with a checklist on the WordPress codex. You can use the data and
        checklist together to test your theme."
            showContent={true}
          />{" "}
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

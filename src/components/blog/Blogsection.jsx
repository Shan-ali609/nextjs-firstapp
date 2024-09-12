import React from "react";
import  Image  from "next/image";
import "@/style/blogcss/blogsection.css";
import Link from "next/link";

export default function Blogsection() {
  return (
    <>
      <div className="container">
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
              alt="good"
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
              <span style={{ color: "#745cf9", cursor: "pointer" }}>
                Aigars
              </span>{" "}
            </p>
            <p className="styled-paragraph">This is a sticky post.</p>
            <p className="list-head">There are a few things to verify:</p>
            <ul className="list-items">
              <li>
                The sticky post should be distinctly recognizable in some way in
                comparison to normal posts. You can style the .sticky class if
                you are using the post_class function to generate your post
                classes, which is a best practice.
              </li>
              <li>
                The sticky post should be distinctly recognizable in some way in
                comparison to normal posts. You can style the .sticky class if
                you are using the post_class() function to generate your post
                classes, which is a best practice.
              </li>
              <li>
                They should still show up again in their chronologically correct
                postion in time, but without the sticky indicator.
              </li>
              <li>
                If you have a plugin or widget that lists popular posts or
                comments, make sure that this sticky post is not always at the
                top of those lists unless it really is popular.
              </li>
            </ul>
          </div>
        </div>




        <div className="card-container">
          <div>
            <div className="blogbox">
              <div className="newlinkwidth">
                <Link className="Newslink" href="/">
                  NEWS
                </Link>
              </div>

              <Image
                className="blogimg"
                src="/images/blog2.jpg"
                alt="good"
                width={592}
                height={350}
              />
            </div>

            <div className="about-it">
              <h1 className="sticky">
                <Link href="" style={{ color: "black" }}>
                  Template: More Tag
                </Link>
              </h1>
              <p className="about-date">
                January 7, 2016October 21, 2020by ||{" "}
                <span style={{ color: "#745cf9", cursor: "pointer" }}>
                  Aigars
                </span>{" "}
              </p>

              <p className="about-date">
                This content is before the ||{" "}
                <span style={{ color: "#745cf9", cursor: "pointer" }}>
                  more tags
                </span>{" "}
              </p>

              <p className="about-date">
                Right after this sentence should be a “continue reading” button
                of some sort.
              </p>

              <button type="button" className="btt">
                READ MORE→
              </button>
            </div>
          </div>

          <div>
            <div className="blogbox">
              <div className="newlinkwidth">
                <Link className="Newslink" href="/">
                  NEWS
                </Link>
              </div>

              <Image
                className="blogimg"
                src="/images/blog3.jpg"
                alt="good"
                width={592}
                height={350}
              />
            </div>
            <div className="about-it">
              <h1 className="sticky">
                <Link href="" style={{ color: "black" }}>
                  Hello world!
                </Link>
              </h1>
              <p className="about-date">
                Wellcome to{" "}
                <span style={{ color: "#745cf9", cursor: "pointer" }}>
                  colorlib.com
                </span>{" "}
                . This is your first post. Edit or delete it, then start
                blogging!
              </p>
            </div>
          </div>


          <div>
            <div className="blogbox">
              <div className="newlinkwidth">
                <Link className="Newslink" href="/">
                  NEWS
                </Link>
              </div>

              <Image
                className="blogimg"
                src="/images/blog4.jpg"
                alt="good"
                width={592}
                height={350}
              />
            </div>
            <div className="about-it">
              <h1 className="sticky">
                <Link href="" style={{ color: "black" }}>
                Markup: HTML Tags and Formatting
                </Link>
              </h1>

              <p className="about-date">
                January 7, 2016October 21, 2020by ||{" "}
                <span style={{ color: "#745cf9", cursor: "pointer" }}>
                  Aigars
                </span>{" "}
              </p>
              <p className="about-date">
                HTML Tags and Formatting
              </p>
              <button type="button" className="btt">
                READ MORE→
              </button>
             
            </div>
          </div>


          <div>
            <div className="blogbox">
              <div className="newlinkwidth">
                <Link className="Newslink" href="/">
                  NEWS
                </Link>
              </div>

              <Image
                className="blogimg"
                src="/images/blog5.jpg"
                alt="good"
                width={592}
                height={350}
              />
            </div>
            <div className="about-it">
              <h1 className="sticky">
                <Link href="" style={{ color: "black" }}>
                Markup: Image Alignment
                </Link>
              </h1>

              <p className="about-date">
                January 7, 2016October 21, 2020by ||{" "}
                <span style={{ color: "#745cf9", cursor: "pointer" }}>
                  Aigars
                </span>{" "}
              </p>

              <p className="about-date">
              Welcome to image alignment! The best way to demonstrate the ebb and flow of the
               various image positioning options is to nestle them snuggly among an ocean of words. Grab a paddle and let’s get started.
              </p>

              <button type="button" className="btt">
                READ MORE→
              </button>
            </div>
          </div>

          <div>
            <div className="blogbox">
              <div className="newlinkwidth">
                <Link className="Newslink" href="/">
                  NEWS
                </Link>
              </div>

              <Image
                className="blogimg"
                src="/images/blog6.jpg"
                alt="good"
                width={592}
                height={350}
              />
            </div>
            <div className="about-it">
              <h1 className="sticky">
                <Link href="" style={{ color: "black" }}>
                Markup: Text Alignment
                </Link>
              </h1>
              
              <p className="about-date">
                January 7, 2016October 21, 2020by ||{" "}
                <span style={{ color: "#745cf9", cursor: "pointer" }}>
                  Aigars
                </span>{" "}
              </p>

              <h1 className="sticky">
                <Link href="" style={{ color: "black" }}>
                Default
                </Link>
              </h1>
              <p className="about-date">
              This is a paragraph. It should not have any alignment of any kind. It should just flow like you would normally expect. Nothing fancy. Just straight up text, free flowing, with love. Completely neutral and not picking a side or sitting on the fence. It just is. It just freaking is.
               It likes where it is. It does not feel compelled to pick a side. Leave him be. It will just be better that way. Trust me.
              </p>
              <button type="button" className="btt">
                READ MORE→
              </button>
            </div>
          </div>




          <div>
            <div className="blogbox">
              <div className="newlinkwidth">
                <Link className="Newslink" href="/">
                  NEWS
                </Link>
              </div>

              <Image
                className="blogimg"
                src="/images/blog7.jpg"
                alt="good"
                width={592}
                height={350}
              />
            </div>
            <div className="about-it">
              <h1 className="sticky">
                <Link href="" style={{ color: "black" }}>
                Markup: Title With Special Characters
                </Link>
              </h1>
              
              <p className="about-date">
                January 7, 2016October 21, 2020by ||{" "}
                <span style={{ color: "#745cf9", cursor: "pointer" }}>
                  Aigars
                </span>{" "}
              </p>

              <p className="about-date">
              Putting special characters in the title should have no adverse effect on the layout or functionality.
              </p>
              <button type="button" className="btt">
                READ MORE→
              </button>
            </div>
          </div>



          <div>
            <div className="blogbox">
              <div className="newlinkwidth">
                <Link className="Newslink" href="/">
                  NEWS
                </Link>
              </div>

              <Image
                className="blogimg"
                src="/images/blog8.jpg"
                alt="good"
                width={592}
                height={350}
              />
            </div>
            <div className="about-it">
              <h1 className="sticky">
                <Link href="" style={{ color: "black" }}>
                Markup: Title With Markup
                </Link>
              </h1>
              
              <p className="about-date">
                January 7, 2016October 21, 2020by ||{" "}
                <span style={{ color: "#745cf9", cursor: "pointer" }}>
                  Aigars
                </span>{" "}
              </p>

            
             
              <button type="button" className="btt">
                READ MORE→
              </button>
            </div>
          </div>


          <div>
            <div className="blogbox">
              <div className="newlinkwidth">
                <Link className="Newslink" href="/">
                  NEWS
                </Link>
              </div>

              <Image
                className="blogimg"
                src="/images/blog9.jpg"
                alt="good"
                width={592}
                height={350}
              />
            </div>
            <div className="about-it">
              <h1 className="sticky">
                <Link href="" style={{ color: "black" }}>
                Edge Case: Nested And Mixed Lists
                </Link>
              </h1>
              
              <p className="about-date">
                January 7, 2016October 21, 2020by ||{" "}
                <span style={{ color: "#745cf9", cursor: "pointer" }}>
                  Aigars
                </span>{" "}
              </p>

            
              <p className="about-date">
              Nested and mixed lists are an interesting beast. It’s a corner case to make sure that
              </p>
              <button type="button" className="btt">
                READ MORE→
              </button>
            </div>
          </div>

          <div>
            <div className="blogbox">
              <div className="newlinkwidth">
                <Link className="Newslink" href="/">
                  NEWS
                </Link>
              </div>

              <Image
                className="blogimg"
                src="/images/blog10.jpg"
                alt="good"
                width={592}
                height={350}
              />
            </div>
            <div className="about-it">
              <h1 className="sticky">
                <Link href="" style={{ color: "black" }}>
                Template: Featured Image (Vertical)
                </Link>
              </h1>
              
              <p className="about-date">
                January 7, 2016October 21, 2020by ||{" "}
                <span style={{ color: "#745cf9", cursor: "pointer" }}>
                  Aigars
                </span>{" "}
              </p>

             
              <p className="about-date">
              Non-square images can provide some unique styling issues.
              </p>
              <p className="about-date">
              This post tests a vertical featured image.
              </p>
            
            </div>
          </div>



          <div>
            <div className="blogbox">
              <div className="newlinkwidth">
                <Link className="Newslink" href="/">
                  NEWS
                </Link>
              </div>

              <Image
                className="blogimg"
                src="/images/blog11.jpg"
                alt="good"
                width={592}
                height={350}
              />
            </div>
            <div className="about-it">
              <h1 className="sticky">
                <Link href="" style={{ color: "black" }}>
                Template: Featured Image (Horizontal)
                </Link>
              </h1>
              
              <p className="about-date">
                January 7, 2016October 21, 2020by ||{" "}
                <span style={{ color: "#745cf9", cursor: "pointer" }}>
                  Aigars
                </span>{" "}
              </p>

             
              <p className="about-date">
              Non-square images can provide some unique styling issues.
              </p>
              <p className="about-date">
              This post tests a vertical featured image.
              </p>
             
            </div>
          </div>


          <div>
            <div className="blogbox">
              <div className="newlinkwidth">
                <Link className="Newslink" href="/">
                  NEWS
                </Link>
              </div>

              <Image
                className="blogimg"
                src="/images/blog12.jpg"
                alt="good"
                width={592}
                height={350}
              />
            </div>
            <div className="about-it">
              <h1 className="sticky">
                <Link href="" style={{ color: "black" }}>
                Template: Featured Image (Horizontal)
                </Link>
              </h1>
              
              <p className="about-date">
                January 7, 2016October 21, 2020by ||{" "}
                <span style={{ color: "#745cf9", cursor: "pointer" }}>
                  Aigars
                </span>{" "}
              </p>

             
              <p className="about-date">
              This is the post content. It should be displayed in place of the user-defined excerpt in single-page views.
              </p>
             
             
            </div>
          </div>






        </div>
      </div>
    </>
  );
}

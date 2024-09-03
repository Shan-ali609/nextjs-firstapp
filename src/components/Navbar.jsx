"use client";
import React, { useState } from "react";
import "../style/Navbar.css";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <div>
          <a href="http://localhost:3000/">
            <span className="Name">Shapely Demo</span>
          </a>
        </div>

        <button
          class="navbar-toggle"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          &#9776;
        </button>

        <ul className={`fields ${isNavOpen ? "open" : ""}`}>
          <li>
            <a href="home">HOME</a>
          </li>
          <li>
            <a href="blog">BLOG</a>
          </li>
          <li>
            <a href="portfolio">PORTFOLIO</a>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle">
              ABOUTTHETESTS{" "}
              <span>
                {" "}
                <img className="drop" src="/images/drop.png"></img>{" "}
              </span>
            </a>

            <ul className="dropdown-menu">
              <li>
                <a href="#">Page Image Alignment</a>
              </li>
              <li>
                <a href="#">Page Markup and formating</a>
              </li>
              <li>
                <a href="#">Clear Floats</a>
              </li>
              <li>
                <a href="#">Page with Comments</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle">
              LEVEL1{" "}
              <span>
                {" "}
                <img className="drop" src="/images/drop.png"></img>{" "}
              </span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Level 1.1</a>
              </li>
              <li>
                <a href="#">Level 1.2</a>
              </li>
              <li>
                <a href="#">Level 1.3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="shop">SHOP</a>
          </li>
          <li>
            <img className="srch" src="/images/search.png" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

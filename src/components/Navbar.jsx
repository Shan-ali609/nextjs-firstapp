"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import "../style/Navbar.css";
import Link from "next/link";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="fullscreen-background">
      <nav className="navbar">
        <div>
          <Link href="http://localhost:3000/">
            <span className="Name">Shapely Demo</span>
          </Link>
        </div>

        <button
          className="navbar-toggle"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          &#9776;
        </button>

        <ul className={`fields ${isNavOpen ? "open" : ""}`}>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/blog1">BLOG</Link>
          </li>
          <li>
            <Link href="/portfolio">PORTFOLIO</Link>
          </li>
          <li className="dropdown">
            <Link href="/aboutthetest" className="dropdown-toggle">
              ABOUTTHETESTS{" "}
              <span>
                {" "}
                <img className="drop" src="/images/drop.png" alt="Dropdown" />{" "}
              </span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link href="pageimagealignment">Page Image Alignment</Link>
              </li>
              <li>
                <Link href="#">Page Markup and Formatting</Link>
              </li>
              <li>
                <Link href="#">Clear Floats</Link>
              </li>
              <li>
                <Link href="#">Page with Comments</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link href="#" className="dropdown-toggle">
              LEVEL1{" "}
              <span>
                {" "}
                <img className="drop" src="/images/drop.png" alt="Dropdown" />{" "}
              </span>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link href="#">Level 1.1</Link>
              </li>
              <li>
                <Link href="#">Level 1.2</Link>
              </li>
              <li>
                <Link href="#">Level 1.3</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/shop">SHOP</Link>
          </li>
          <li>
            <IoSearch className="conn" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

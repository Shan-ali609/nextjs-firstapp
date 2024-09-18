 "use client";
 import React, { useState } from "react";
 import { IoSearch   } from "react-icons/io5";
 import { VscChevronDown } from "react-icons/vsc";
 import "../style/Navbar.css";
 import Link from "next/link";

 export default function Navbar() {
   const [isNavOpen, setIsNavOpen] = useState(false);
const [isSearchOpen, setIsSearchOpen] = useState(false);

   const toggleNav = () => {
     setIsNavOpen(!isNavOpen);
   };
const toggleSearch = () => {
  setIsSearchOpen(!isSearchOpen);
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
            
                 <VscChevronDown className="drop" />

           </span>
             </Link>
             <ul className="dropdown-menu">
               <li>
                 <Link href="pageimagealignment">Page Image Alignment</Link>
               </li>
               <li>
                 <Link href="/pagemarkupandformating">Page Markup and Formatting</Link>
               </li>
               <li>
                 <Link href="clearingfloats">Clear Floats</Link>
               </li>
               <li>
                 <Link href="pagewithcomment">Page with Comments</Link>
               </li>
              
               <li>
                 <Link href="pagecomment">Page with Comments disabled</Link>
               </li>
             </ul>
           </li>
           <li className="dropdown">
             <Link href="/level1" className="dropdown-toggle">
               LEVEL1{" "}
               <span>
               <VscChevronDown className="drop" />
               </span>
             </Link>
             <ul className="dropdown-menu">
               <li>
                 <Link href="/level2">Level2</Link>
              <ul className="dropdown-menu2">
               <li>
                 <Link href="level3">Level3</Link>
               </li>
               <li>
                 <Link href="level3a">Level3a</Link>
               </li>
               <li>
                 <Link href="level3b">Level3b</Link>
               </li>
             </ul>


               </li>
               <li>
                 <Link href="/level2a">Level2a</Link>
               </li>
               <li>
                 <Link href="/level2b">Level2b</Link>
               </li>
             </ul>
           </li>
           <li>
             <Link href="/shop">SHOP</Link>
           </li>
           <li className="search-container" onMouseEnter={toggleSearch} >
             <IoSearch className="conn"  />
            {isSearchOpen && (
             <div className="search-section" onMouseLeave={toggleSearch}>
            <input type="text" placeholder="Search..." />
            <button type="button">Search</button>
             </div>
             )}
           </li>
         </ul>
       </nav>
     </div>
   );
 }


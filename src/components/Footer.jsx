import React from 'react';
import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import "../style/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className='flex-check'>
        <p className='content'>Theme by Colorlib Powered by WordPress</p>
        <div className='icons-footer'>
          <IoLogoFacebook />
          <IoLogoTwitter />
          <IoLogoYoutube />
          <IoLogoInstagram />
          <IoLogoLinkedin />
        </div>
      </div>
    </footer>
  );
}

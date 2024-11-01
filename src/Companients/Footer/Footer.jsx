import React from "react";
import "./Footer.scss";

const Footer = () => {
  const now = new Date();
  const hours = now.getFullYear();
  const minutes = now.getUTCFullYear();
  const seconds = now.getSeconds();

  return(
   <div className="footer">
    <div className="footer_wrapper">
      <p>© Copyright Autozoom.uz 2023-{minutes}</p>
    </div>
   </div>
  );

};

export default Footer;

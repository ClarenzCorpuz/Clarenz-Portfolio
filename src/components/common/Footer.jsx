import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="site-footer text-center py-3">
      © {new Date().getFullYear()} Mc Clarenz Vinn Corpuz | All rights reserved.
    </footer>
  );
}

export default Footer;

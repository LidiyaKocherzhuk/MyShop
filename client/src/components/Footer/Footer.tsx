import "./Footer.css";

import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import { RiFacebookFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className={"Footer"}>
      <div className={"footer-content"}>
        <div>
          <p className={"content-header"}>Contact Us</p>
          <p>1-800-000-0000</p>
          <p>info@mysite.com</p>
          <div>
            <BiLogoTelegram />
            <RiFacebookFill />
            <RiInstagramFill />
          </div>
        </div>

        <div>
          <p className={"content-header"}>We Accept</p>
          <div>
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
          </div>
        </div>

        <div>
          <p className={"content-header"}>Join our mailing list</p>
          <input type="text" placeholder={"Enter your email here"} />
          <button>Subscribe Now</button>
        </div>
      </div>
      <div className={"typography"}></div>
    </div>
  );
};

export { Footer };

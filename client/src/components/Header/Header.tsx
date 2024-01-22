import "./Header.css";

import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import { HiMiniUserCircle } from "react-icons/hi2";
const Header = () => {
  return (
    <div className={"Header"}>
      <div className={"header-content"}>
        <div className={"logo"}>TEMPO</div>

        <div className={"nav-bar"}>
          <div>Home</div>
          <div>Kitchen</div>
          <div>Bedroom</div>
          <div>Anteroom</div>
          <div>About</div>
          <div>Contact</div>
        </div>

        <div className={"login"}>
          <HiMiniUserCircle />
          <p>Log In</p>
        </div>

        <div className={"basket"}>
          <GiShoppingBag />
          <span className={"goods-count"}>0</span>
        </div>
      </div>
    </div>
  );
};

export { Header };

import React from "react";

import { logos } from "../../public/resources/resources";

const TopBar = () => {
  return (
    <div className="topbar">
      <span>{/* <NotificationImportant /> */}</span>
      <span>{/* <Settings /> */}</span>
      <div className="imgContainer">
        <a href="/">
          <img src={logos.impalaLogo.src} alt="" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;

import React from "react";
import SidebarLeft from "./SidebarLeft";
import SidebarTop from "./SidebarTop";
import '../styles/appBody.css';
import Feed from "./Feed";

function Body() {
  return (
    <div className='appBody'>
      {/* left sidebar */}
      <SidebarLeft />
      {/* top sidebar */}
      <div className='appBody__feed'>
      <SidebarTop/>
      {/* sidebars 1 and 2*/}
      <Feed/>
      </div>
      {/* email feed */}
    </div>
  );
}

export default Body;

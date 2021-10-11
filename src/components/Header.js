import React, { useState } from "react";
import "../styles/header.css";
import DialpadIcon from "@mui/icons-material/Dialpad";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Avatar from "@mui/material/Avatar";
import {logout} from '../features/user/userSlice'
import {useDispatch,useSelector} from 'react-redux';
import { selectUser } from '../features/user/userSlice'

function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const [searchPlaceholder, setSearchPlaceholder] = useState("search");
  const headerButton = (icon, text) => {
    if (text) {
      return (
        <button className="header__menuFlex">
          {icon}
          {text ? text : ""}
        </button>
      );
    }
    else{
        return (
            <button className="header__buttonMenu ">
              {icon}
            </button>
          );
    }
  };

  const handleAvatarClick = () =>{
    dispatch(logout());
  }

  return (
    <div className="header">
      <div className="header__left">
        <button className="header__buttonMenu">
          <DialpadIcon />{" "}
        </button>
        <h2>Outlook</h2>
      </div>
      <div className="header__search">
        <SearchTwoToneIcon />
        <input type="text" placeholder={searchPlaceholder} />
      </div>
      <div className="header__right">
        {headerButton(<VideocamOutlinedIcon />, "Meet Now")}
        {headerButton(<SettingsIcon />)}
        {headerButton(<HelpOutlineOutlinedIcon />)}
        <Avatar className="avatar" onClick={handleAvatarClick}>{user.name[0]}</Avatar>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import Notifications from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./style.scss";
import Logo from "../../assets/svg/logo.svg";
import HeaderOption from "./HeaderOption";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firbase";
const Header = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const logOutofApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <>
      <header className="header">
        <div className="header__left">
          <img src={Logo} alt="" />
          <div className="header__search">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={Notifications} title="Notifications" />
          <HeaderOption
            // avatar="https://picsum.photos/id/870/25/25?grayscale&blur=2"
            avatar={true}
            title="me"
            onClick={logOutofApp}
          />
        </div>
      </header>
    </>
  );
};

export default Header;

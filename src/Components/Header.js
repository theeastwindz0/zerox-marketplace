import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/Header.module.css";
import logo from "../Images/logo.png";
import Buttons from "./Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import NavigationProvider from "../Store/NavigationProvider";
import navigationContext from "../Store/NavigationContext";

const Header = () => {
  const ctx=useContext(navigationContext);  return (
    <NavigationProvider>
    <div className={styles.header}>
      <div className={styles.header_left}>
        <Link to='/'><img src={logo} alt="logo" /></Link>
      </div>
      <div className={styles.header_middle}>
        <Buttons buttons={ctx.buttons}/>
      </div>
      <div className={styles.header_right}>
        <Link to='/bag'><FontAwesomeIcon className={styles.logo}  icon={faBagShopping}/> </Link>
      </div>
    </div>
    </NavigationProvider>
  );
};

export default Header;

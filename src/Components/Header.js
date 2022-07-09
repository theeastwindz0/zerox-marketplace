import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/Header.module.css";
import logo from "../Images/logo.png";
import Buttons from "./Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars ,faXmark} from "@fortawesome/free-solid-svg-icons";
import NavigationProvider from "../Store/NavigationProvider";
import navigationContext from "../Store/NavigationContext";

const Header = () => {

  const headerOverlayToggleOn=()=>{
    document.getElementById("headerOverlay").style.top="0%";
  }

  const headerOverlayToggleOff=()=>{
    document.getElementById("headerOverlay").style.top="-100%";
  }

  const ctx = useContext(navigationContext);
  return (
    <NavigationProvider>
      <div className={styles.header}>
        <div className={styles.header_left}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.header_middle}>
          <Buttons buttons={ctx.buttons} />
        </div>
        <div className={styles.header_right}>
          <Link to="/bag">
            <FontAwesomeIcon className={styles.logo} icon={faBagShopping} />
          </Link>
        </div>
      </div>
      <div className={styles.res_header}>
        <div className={styles.header_left}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.header_middle}></div>
        <div className={styles.header_right}>
          <Link to="/bag">
            <FontAwesomeIcon className={styles.logo} icon={faBagShopping} />
          </Link>
          <Link to="/bag">
            <FontAwesomeIcon onClick={headerOverlayToggleOn} className={styles.logo} icon={faBars} />
          </Link>
        </div>
      </div>
      <div id="headerOverlay" className={styles.header_overlay}>
      <div className={styles.submenu}>
              <Buttons onClick={headerOverlayToggleOff} buttons={ctx.buttons}></Buttons>
            </div>
      <Link to="/bag">
            <FontAwesomeIcon onClick={headerOverlayToggleOff} className={styles.crossIcon} icon={faXmark} />
          </Link>
      </div>
    </NavigationProvider>
  );
};

export default Header;

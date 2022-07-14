import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/Header.module.css";
import logo from "../Images/logo.png";
import Buttons from "./Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars ,faUser,faXmark} from "@fortawesome/free-solid-svg-icons";
import NavigationProvider from "../Store/NavigationProvider";
import navigationContext from "../Store/NavigationContext";
import CartContext from "../Store/CartContext";

const Header = () => {
  const ctx = useContext(navigationContext);
  const cartCtx=useContext(CartContext);

  const [itemChanged,setItemChanged]=useState(false);
  const btnClasses=`${styles.logo} ${itemChanged?styles.bump:''}`;

  const headerOverlayToggleOn=()=>{
    document.getElementById("headerOverlay").style.top="0%";
  }

  const headerOverlayToggleOff=()=>{
    document.getElementById("headerOverlay").style.top="-150%";
  }

  useEffect(() => {
    if(cartCtx.totalAmount===0)return;
    setItemChanged(true);

    const timer=setTimeout(() => {
      setItemChanged(false);
    }, 500);
  
    return () => {
      clearTimeout(timer);
    }
  }, [cartCtx.totalAmount])
  

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
            <FontAwesomeIcon className={btnClasses} icon={faBagShopping} />
          </Link>
        </div>
      </div>
      <div className={styles.res_header}>
        <div className={styles.header_left}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.header_right}>
          <div className={styles.header_right_cart}>

          <Link to="/bag">
            <FontAwesomeIcon className={btnClasses} icon={faBagShopping} />
          </Link>
          </div>
          <div onClick={headerOverlayToggleOn}>
            <FontAwesomeIcon className={styles.logo} icon={faBars} />
          </div>
        </div>
      </div>
      <div id="headerOverlay" className={styles.header_overlay}>
      <div className={styles.submenu}>
              <Buttons onClick={headerOverlayToggleOff} buttons={ctx.buttons}></Buttons>
            </div>
            <div onClick={headerOverlayToggleOff}>
            <FontAwesomeIcon  className={styles.crossIcon} icon={faXmark} />
            </div>
      </div>
    </NavigationProvider>
  );
};

export default Header;

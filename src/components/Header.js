import React from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/Header.module.css";
import logo from "../Images/logo.png";
import Buttons from "./Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const buttons = [
    { title: "LAPTOP", location: "/laptop" },
    { title: "MOBILE", location: "/mobile" },
    { title: "TABLET", location: "/tablet" },
    { title: "AIRPORDS", location: "/airpords" },
    { title: "WATCH", location: "/watch" },
    { title: "ACCESSORIES", location: "/accessories" },
    { title: "SUPPORT", location: "/support" },

  ];

  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <Link to='/'><img src={logo} alt="logo" /></Link>
      </div>
      <div className={styles.header_middle}>
        <Buttons buttons={buttons}/>
      </div>
      <div className={styles.header_right}>
        <Link to='/bag'><FontAwesomeIcon className={styles.logo}  icon={faBagShopping}/> </Link>
      </div>
    </div>
  );
};

export default Header;

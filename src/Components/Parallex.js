import React from "react";
import styles from "../CSS/Parallex.module.css";
const Parallex = (props) => {
    const myStyle={
        // backgroundImage:`url(${props.dtr.parallexImage})`,
    }
  return (
    <>
      <div style={myStyle} className={styles.parallex}></div>
      <div className={styles.parallex_container}>
        <div className={styles.tag}>{props.dtr.tag}</div>
        <div className={styles.tagline}>{props.dtr.tagline}</div>
      </div>
    </>
  );
};

export default Parallex;

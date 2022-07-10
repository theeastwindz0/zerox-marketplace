// const dts={
//   title:'iPhone 13 Pro',
//   tagline:'Oh So . Pro',
//   productImage:container_1,
//   backgroundColor:'white',
//   fontColor:'black',
//   buttonLocation:'/laptop'
// }
import React from "react";
import styles from "../CSS/SectionHalf.module.css";
import { Link } from "react-router-dom";
const SectionHalf = (props) => {
  const myStyle = {
    backgroundColor: `${props.dtr.backgroundColor}`,
    color: `${props.dtr.color}`,
  };
  return (
    <div style={myStyle} className={styles.SectionHalf}>
      <h1>{props.dtr.title}</h1>
      <h3>{props.dtr.tagline}</h3>
      <div className={styles.SectionHalf_buttons}>
        <Link to={props.dtr.buttonLocation}>Learn More</Link>
      </div>
      <div className={styles.sectionHalf_box3}>
        <img src={props.dtr.productImage} alt='Product X' />
      </div>
    </div>
  );
};

export default SectionHalf;

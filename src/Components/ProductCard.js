import React from "react";
import styles from "../CSS/ProductCard.module.css";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  // const dtr={
  //   title:'Macbook Air',
  //   price:'$999'
  //   tagline:'Tagline of the product',
  //   new:true,
  //   detailsPath:'/lapotp',
  //   productImage:modal
  // }
  return (
    <div className={styles.productCard}>
      <img src={props.dtr.productImage} alt="modal" />
      {props.dtr.new && <p style={{ color: "red" }}>New</p>}
      <h2>{props.dtr.title}</h2>
      <h4>{props.dtr.tagline}</h4>
      <h3 style={{ color: "red" }}> ₹{props.dtr.price}</h3>
      <div>
        <Link to={props.dtr.detailsPath}>
          <button className={styles.button1}>DETAILS</button>
        </Link>
      </div>
      <button className={styles.button1}>ADD TO CART</button>
    </div>
  );
};

export default ProductCard;

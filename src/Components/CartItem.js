// const dtr = {
//   title: "Apple Macbook Air M1",
//   pImage: "",
//   price: 499,
// };
import React, {  useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/CartItem.module.css";
import buttons from "../CSS/MultipleButtons.module.css";
import CartContext from "../Store/CartContext";
const CartItem = (props) => {
  const ctx = useContext(CartContext);
  const buttonStyle = {
    width: "40px",
  };

  const addItemToCart=()=>{
      ctx.addItem({...props.dtr,amount:1});
  }

  const removeItem=()=>{
      ctx.removeItem({id:props.dtr.id});
  }

  return (
    <div className={styles.cart_item}>
      <div className={styles.box_1}>
        <Link to={props.dtr.location}><img src={props.dtr.pImage} alt="Product Sample"/></Link>
      </div>
      <div className={styles.box_2}>
        <h1>{props.dtr.name}</h1>
        <div className={styles.box_2_buttons}>
          <h2>X {props.dtr.amount}</h2>
          <button onClick={removeItem} style={buttonStyle} className={buttons.button1}>
            -
          </button>
          <button onClick={addItemToCart} style={buttonStyle} className={buttons.button1}>
            +
          </button>
        </div>
        <h2>{props.dtr.price}</h2>
      </div>
    </div>
  );
};

export default CartItem;

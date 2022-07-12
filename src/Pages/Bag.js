import React, { useContext } from "react";
import CartItem from "../Components/CartItem";
import gridLayout from '../CSS/GridLayout.module.css'
import CartContext from "../Store/CartContext";
import styles from '../CSS/Bag.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
const Bag = () => {
  const ctx=useContext(CartContext);

  return (
    <>
    {ctx.totalAmount!==0 &&
    <div className={gridLayout.FlexKit_1}>
      {ctx.items.map((item)=>(
        <CartItem dtr={item} key={item.id}/>
      ))}
      <div className={styles.total}>
        <h3>Sub Total</h3>
        <h3>{ctx.totalAmount}</h3>
      </div>
      <div className={styles.total}>
        <h3>Shipping</h3>
        <h3>FREE</h3>
      </div>
      <div className={styles.line}></div>
      <div className={styles.total}>
        <h1>Total</h1>
        <h1>{ctx.totalAmount}</h1>
      </div>
    </div>
}
{ctx.totalAmount===0 &&
<div className={styles.empty_bag}>
<FontAwesomeIcon className={styles.icon} icon={faBagShopping}></FontAwesomeIcon>
<h1>BAG IS EMPTY</h1>
</div>}
    </>
  );
};

export default Bag;

// const dtr={
//   title:'Macbook Air',
//   price:'$999'
//   tagline:'Tagline of the product',
//   new:true,
//   detailsPath:'/lapotp',
//   productImage:modal
// }
import styles from "../CSS/ProductCard.module.css";
import { Link } from "react-router-dom";
import CartContext from "../Store/CartContext";
import { useContext } from "react";
const ProductCard = (props) => {
  const ctx =useContext(CartContext);
  const addToCartHandler=()=>{
    ctx.addItem({id:props.dtr.id,amount:1})
  }
  return (
    <div className={styles.productCard}>
      <img src={props.dtr.pImage} alt="modal" />
      {props.dtr.new && <p style={{ color: "red" }}>New</p>}
      <h2>{props.dtr.name}</h2>
      <h4>{props.dtr.tagline}</h4>
      <h3 style={{ color: "red" }}>₹{props.dtr.price}</h3>
      <div>
        <Link to={props.dtr.location}>
          <button className={styles.button1}>DETAILS</button>
        </Link>
      </div>
      <button className={styles.button1} onClick={addToCartHandler} >ADD TO CART</button>
    </div>
  );
};

export default ProductCard;

// const dataToSend={
//   pName:'',
//   pImages:[],
//   pDescription:[],

//   pID:'',
//   pPrice:'',
//   pTags:''

// }

import styles from "../CSS/ProductDetailed.module.css";
import gridLayout from "../CSS/GridLayout.module.css";
import buttons from "../CSS/MultipleButtons.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../Store/CartContext";
import { Link } from "react-router-dom";

const ProductDetailed = (props) => {

  const ctx=useContext(CartContext);

  const addItemToCart=()=>{
    ctx.addItem({id:props.dtr.id,amount:1
    })
  }
  const [currentImage, SetCurrentImage] = useState(
    props.dtr.pImages[0]
  );

  const onImageTabButtonHandler = (item) => {
    SetCurrentImage(item);
  };


  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className={gridLayout.FlexKit_2}>
        <div className={styles.box_1}>
          <h4 className={styles.title}>Products/{props.dtr.name}</h4>
          <div className={styles.box_1_Image}>
            <img
              id="productImage"
              alt={props.name + "Image"}
              src={currentImage}
            />
          </div>
          <div className={styles.box_1_Images_Tab}>
            {props.dtr.pImages.map((element, i) => (
              <img
                alt={props.name + "Image"}
                key={i}
                onClick={() => onImageTabButtonHandler(element)}
                src={element}
              ></img>
            ))}
          </div>
          <div className={styles.box_1_Text}>
            {props.dtr.description}
          </div>
        </div>

        <div className={styles.box_2}>
          <div className={styles.box_2_Top_Part}>
            <h2>{props.dtr.name}</h2>
            <p>{props.dtr.id}</p>
            <h2 className={styles.price}>{"₹" + props.dtr.price}</h2>
            {/* <form className={styles.form}> */}
            <label>Quantity</label>
            <input type="number" min="1" max="1" defaultValue={1}></input>
            {/* </form> */}
            <button className={buttons.button1} onClick={addItemToCart}>ADD TO CART</button>
            <Link to='/bag'><button style={{width:'100%', height:'32px'}} onClick={addItemToCart} className={buttons.button1}>BUY NOW</button></Link>
          </div>
          <div className={styles.box_2_Bottom_Part}>
            <h2>SHIPPING</h2>
            <p>
              Currently we are not Shipping anything as as our site is in
              development mode , you could visit our store and purchase our
              products , Thank you.
            </p>

            <h2>REFUND</h2>
            <p>
              We hope you will be pleased with your purchase. Should you wish to
              return anything bought from us, we will be happy to refund or
              exchange a product provided it is in a fully resalable condition
              .Return should be made within a resalable time (7 days) and in
              orignal , undamaged packaging .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailed;

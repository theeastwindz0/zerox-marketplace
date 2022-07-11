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
import buttons from '../CSS/MultipleButtons.module.css'
import { useEffect, useState } from "react";

const ProductDetailed = (props) => {
  const [currentImage, SetCurrentImage] = useState(props.dataToReceive.pImages[0]);

  const onImageTabButtonHandler = (item) => {
    SetCurrentImage(item);
  };

  useEffect(() => {
    window.scroll(0,0)
}, [])



  return (
    <>
   
      <div backgroundColor="white" className={gridLayout.FlexKit_2}>
        <div className={styles.box_1}>
          <h4 className={styles.title}>Products/{props.dataToReceive.pName}</h4>
          <div className={styles.box_1_Image}>
            <img id="productImage" alt={props.pName + 'Image'} src={currentImage} />
          </div>
          <div className={styles.box_1_Images_Tab}>
            {
             props.dataToReceive.pImages.map((element,i)=>
             (
              <img alt={props.pName + 'Image'} key={i}
              onClick={() => onImageTabButtonHandler(element)}
              src={element}
            ></img>
             ))
             
            }
            
          </div>
          <div className={styles.box_1_Text}>
            {props.dataToReceive.pDescription}
          </div>
        </div>

        <div className={styles.box_2}>
          <div className={styles.box_2_Top_Part}>
            <h2>{props.dataToReceive.pName}</h2>
            <p>{props.dataToReceive.pID}</p>
            <h2 className={styles.price}>{'₹'+props.dataToReceive.pPrice}</h2>
            {/* <form className={styles.form}> */}
            <label>Quantity</label>
            <input type="number" min='1' max='5' defaultValue={1}></input>
            {/* </form> */}
            <button className={buttons.button1}
     
            >
              ADD TO CART
            </button>
            <button className={buttons.button1}>
              BUY NOW
            </button>
          </div>
          <div className={styles.box_2_Bottom_Part}>
            <h2>SHIPPING</h2>
            <p>
              Currently we are not Shipping anything as as our site is  in development mode , you could visit our store and purchase our products , Thank you.
            </p>

            <h2>REFUND</h2>
            <p>
            We hope you will be pleased with your purchase. Should you wish to return anything bought from us, we will be happy to refund or exchange a product provided it is in a fully resalable condition .Return should be made within a resalable time (7 days) and in orignal , undamaged packaging .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailed;
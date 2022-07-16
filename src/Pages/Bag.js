import React, { useContext, useEffect, useState } from "react";
import CartItem from "../Components/CartItem";
import gridLayout from "../CSS/GridLayout.module.css";
import CartContext from "../Store/CartContext";
import styles from "../CSS/Bag.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../Store/AuthContext";
import AuthForm from "../Components/AuthForm";
import buttons from "../CSS/MultipleButtons.module.css";
import DetailsForm from "../Components/DetailsForm";
const Bag = () => {
  const ctx = useContext(CartContext);

  const [ordered, setOrdered] = useState(false);

  const authCtx = useContext(AuthContext);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const orderButtonHandler = () => {
    setOrdered(true);
  };

  const onCancelHandler = () => {
    setOrdered(false);
  };
  return (
    <div className={styles.bag}>
      {!ordered && (
        <>
          {!authCtx.isLoggedIn && <AuthForm />}
          {ctx.totalAmount !== 0 && authCtx.isLoggedIn && (
            <div className={gridLayout.FlexKit_1}>
              {ctx.items.map((item) => (
                <CartItem dtr={item} key={item.id} />
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
              <div className={styles.order_button}>
                <button
                  style={{ width: "200px", height: "50px" }}
                  className={buttons.button1}
                  onClick={orderButtonHandler}
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          )}
          {ctx.totalAmount === 0 && authCtx.isLoggedIn && (
            <div className={styles.empty_bag}>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faBagShopping}
              ></FontAwesomeIcon>
              <h1>BAG IS EMPTY</h1>
            </div>
          )}
        </>
      )}
      {ordered && (
        <div className={styles.details_form}>
          <DetailsForm onCancelHandler={onCancelHandler} />
        </div>
      )}
    </div>
  );
};

export default Bag;

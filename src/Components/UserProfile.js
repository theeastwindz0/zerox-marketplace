import React, { useContext, useEffect, useState } from "react";
import styles from "../CSS/UserProfile.module.css";
import AuthContext from "../Store/AuthContext";
import buttons from "../CSS/MultipleButtons.module.css";
import AuthForm from "./AuthForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
const UserProfile = () => {
  const ctx = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const logoutHandler = () => {
    ctx.logout();
  };
  const fetchOrderData = async () => {
    const response = await fetch(
      `https://mini-3daaa-default-rtdb.firebaseio.com/${ctx.localid}/orders.json`
    );
    const data = await response.json();
    let orderedItems = [];
    if (data !== null) {
      for (let item in data) orderedItems.push(data[item]);
    }

    setOrders(orderedItems);
    console.log(orderedItems);
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  return (
    <>
      {!ctx.isLoggedIn && <AuthForm />}
      {ctx.isLoggedIn && (
        <div className={styles.userprofile}>
          {orders.length===0 && <h2>NO ORDERS PLACED.</h2>}
          {orders.length!==0 && (
            <>
              <h2>ORDER DETAILS</h2>
            <div className={styles.orders}>
              {orders[orders.length - 1].items.map((currentItem)=>(
                <>
                 <div key={currentItem.id} className={styles.orders_items}>
                 <h3>{currentItem.name}</h3>
                 <h3>X  {currentItem.amount}</h3>
                 <h3>{currentItem.price}</h3>
                 <h3>Subtotal : {currentItem.price * currentItem.amount}</h3>
               </div>
               <div className={styles.order_status}> <FontAwesomeIcon style={{color:'green',fontSize:'20px'}} icon={faTruck}></FontAwesomeIcon> ORDER STATUS :<span  style={{color:"green"}}>ORDER CONFIRMED</span></div>
               </>
              ))
              }
              <h2>TOTAL : <span style={{color:'red'}}>{orders[orders.length-1].totalAmount}</span></h2>
            </div>
            </>
          )}
          <button
            onClick={logoutHandler}
            style={{ width: "200px",height:'50px' }}
            className={buttons.button1}
          >
            LOGOUT
          </button>
        </div>
      )}
    </>
  );
};

export default UserProfile;

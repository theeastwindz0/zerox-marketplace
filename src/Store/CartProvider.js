import React, { useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import CartContext from "./CartContext";
import allItems from "./Data";

const updateCart = async (items, totalAmount, localid) => {
  const response = await fetch(
    `https://mini-3daaa-default-rtdb.firebaseio.com/${localid}/cart-items.json`,
    {
      method: "PUT",
      body: JSON.stringify({ items: items, totalAmount: totalAmount }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  // eslint-disable-next-line
  const data = await response.json();
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const currentItemIndex = allItems.findIndex(
      (item) => item.id === action.item.item.id
    );
    const currentItem = allItems[currentItemIndex];
    const updatedAmount =
      state.totalAmount + currentItem.price * action.item.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(currentItem);
    }

    updateCart(updatedItems, updatedAmount, action.item.localid);
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    const updatedAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter(
        (item) => item.id !== action.item.id.id
      );
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    updateCart(updatedItems, updatedAmount, action.item.localid);
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "RESET") return defaultCartState;

  if (action.type === "UPDATE") {
    return {
      items: action.item.data.totalAmount ? action.item.data.items:[],
      totalAmount: action.item.data.totalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const localid = authCtx.localid;
  const addItemToCartHandler = (item) => {
    if (!authCtx.isLoggedIn) navigate("/userlogin", { replace: true });
    else dispatchCartState({ type: "ADD", item: { item, localid } });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE", item: { id, localid } });
  };

  const resetCartHandler = () => {
    dispatchCartState({ type: "RESET" });
  };

  const trashHandler = (id) => {
    dispatchCartState({ type: "TRASH", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    resetCart: resetCartHandler,
    trash: trashHandler,
  };

  useEffect(() => {
    const fetchCart = async () => {
      if (authCtx.localid) {
        const response = await fetch(
          `https://mini-3daaa-default-rtdb.firebaseio.com/${authCtx.localid}/cart-items.json`
        );
          let data = await response.json();
            if(data===null)data={totalAmount:0}
            dispatchCartState({ type: "UPDATE", item: { data } });
      }
    };
    fetchCart();
  }, [authCtx.localid, authCtx.token]);
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

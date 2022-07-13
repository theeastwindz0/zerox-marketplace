import React, { useReducer } from "react";
import CartContext from "./CartContext";
import allItems from "./Data";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  
  if (action.type === "ADD") {
    const currentItemIndex=allItems.findIndex((item)=>item.id===action.item.id);
    const currentItem=allItems[currentItemIndex];
    const updatedAmount =
      state.totalAmount + currentItem.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(currentItem);
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

   if (action.type === "REMOVE") {

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    const updatedAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  } 
  // else if (action.type === "TRASH") {
  //   const existingCartItemIndex=state.items.findIndex((item)=>item.id===action.id)
  //   let updatedItems;
  //   console.log(existingCartItemIndex);
  //   updatedItems = state.items.filter((item) => item.id !== action.id);
  //   return{
  //     items:updatedItems,
  //     totalAmount:state.totalAmount
  //   }
  // }
  if (action.type === "RESET") return defaultCartState;

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const resetCartHandler = () => {
    dispatchCartState({ type: "RESET" });
  };

  const trashHandler=(id)=>{
    dispatchCartState({type:"TRASH",id:id});
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    resetCart: resetCartHandler,
    trash:trashHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

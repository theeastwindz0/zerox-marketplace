import React from 'react'

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    resetCart:()=>{},
    order:()=>{},
    trash:(id)=>{}
})

export default CartContext;
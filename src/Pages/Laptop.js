import React from 'react'
import { useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import styles from '../CSS/GridLayout.module.css'
import modal from "../Images/Laptops/MacbookAirM1/mba_m1_small.png";

const Laptop = () => {
  useEffect(() => {
    window.scroll(0,0);
  }, [])
  
  const dts=[{
    title:'Macbook Air M1',
    tagline:'World Best Selling Laptop',
    price:999,
    new:false,
    detailsPath:'/laptop',
    productImage:modal
  },
  {
    title:'Macbook Air M2',
    tagline:'World Best Selling Laptop',
    price:1199,
    new:true,
    detailsPath:'/laptop',
    productImage:modal
  },
  {
    title:'Macbook Pro M1',
    tagline:'World Second-Best Selling Laptop',
    price:1199,
    new:false,
    detailsPath:'/laptop',
    productImage:modal
  },
  {
    title:'Macbook Pro M2',
    tagline:'World Second-Best Selling Laptop',
    price:1299,
    new:false,
    detailsPath:'/',
    productImage:modal
  },
  ]

  return (
    <div className={styles.gridLayout2}>
      <ProductCard dtr={dts[0]}/>    
      <ProductCard dtr={dts[1]}/>    
      <ProductCard dtr={dts[2]}/>    
      <ProductCard dtr={dts[3]}/>    
    </div>
  )
}

export default Laptop
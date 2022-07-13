import React from 'react'
import { useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import styles from '../CSS/GridLayout.module.css'
import allItems from '../Store/Data';

const Laptop = () => {
  useEffect(() => {
    window.scroll(0,0);
  }, [])
  
  return (
    <div className={styles.gridLayout2}>
      <ProductCard dtr={allItems[0]}/>    
      <ProductCard dtr={allItems[1]}/>    
      <ProductCard dtr={allItems[2]}/>    
    </div>
  )
}

export default Laptop
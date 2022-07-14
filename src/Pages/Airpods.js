import React from 'react'
import { useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import styles from '../CSS/GridLayout.module.css'
import allItems from '../Store/Data';

const Airpods = () => {
  useEffect(() => {
    window.scroll(0,0);
  }, [])
  
  return (
    <div className={styles.gridLayout2}>
      <ProductCard dtr={allItems[8]}/>    
      <ProductCard dtr={allItems[9]}/>    
      <ProductCard dtr={allItems[10]}/>    
    </div>
  )
}

export default Airpods
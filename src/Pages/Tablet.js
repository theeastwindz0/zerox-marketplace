import React from 'react'
import { useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import styles from '../CSS/GridLayout.module.css'
import allItems from '../Store/Data';

const Tablet = () => {
  useEffect(() => {
    window.scroll(0,0);
  }, [])
  
  return (
    <div className={styles.gridLayout2}>
      <ProductCard dtr={allItems[11]}/>    
      <ProductCard dtr={allItems[12]}/>       
    </div>
  )
}

export default Tablet
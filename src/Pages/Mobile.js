
import React from 'react'
import { useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import styles from '../CSS/GridLayout.module.css'
import allItems from '../Store/Data'
const Mobile = () => {
  useEffect(() => {
    window.scroll(0,0);
  }, [])
  
  return (
    <div className={styles.gridLayout2}>
      <ProductCard dtr={allItems[3]}/>      
      <ProductCard dtr={allItems[4]}/>    
      <ProductCard dtr={allItems[5]}/>
      <ProductCard dtr={allItems[6]}/>
    </div>
  )
}

export default Mobile
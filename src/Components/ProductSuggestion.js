import React from 'react'
import gridLayout from '../CSS/GridLayout.module.css'
import styles from '../CSS/ProductSuggestion.module.css'
import buttons from '../CSS/MultipleButtons.module.css'
import allItems from '../Store/Data'
import { Link } from 'react-router-dom'

const ProductSuggestion = (props) => {
    let suggestedProducts=[];
    allItems.map((item)=>{
        if(item.pTags[0]===props.productTag && item.id!==props.productId )suggestedProducts.push(item);
    })

  return (
      <>
    <div><h1>PRODUCT SUGGESTION</h1></div>
    <div className={gridLayout.FlexKit_2}>
        {suggestedProducts.map((item,i)=>(
        <div className={styles.product_suggestion} key={i}>
            <img src={item.pImage} alt="Item "></img>
            <h2>{item.name}</h2>
            <h2 style={{color:'#32cd32'}}>₹ {item.price}</h2>
            <Link to={item.location}><button style={{width:'200px',height:'50px'}} className={buttons.button1}>DETAILS</button></Link>
        </div>
        ))}
    </div>
    </>
  )
}

export default ProductSuggestion
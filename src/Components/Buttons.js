import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../CSS/Buttons.module.css'
const Buttons = (props) => {
  return (
    <>
    {props.buttons.map((button,key)=>(
    <Link to={button.location} onClick={props.onClick} className={styles.button} key={key}>{button.title}</Link>
    ))}
    </>
  )
}
export default Buttons
import React, { useContext } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import styles from '../CSS/Buttons.module.css'
import AuthContext from '../Store/AuthContext'
import buttons from '../CSS/MultipleButtons.module.css'
const Buttons = (props) => {

  const ctx=useContext(AuthContext);
  const navigate=useNavigate();
  const stateHandler=()=>{
    if(!ctx.isLoggedIn)navigate('/userlogin',{replace:true})
    else {ctx.logout();navigate('/',{replace:true}) } 
    // props.onClick()
    document.getElementById("headerOverlay").style.top="-150%";
  }
  return (
    <>
    {props.buttons.map((button,key)=>(
    <Link to={button.location} onClick={props.onClick} className={styles.button} key={key}>{button.title}</Link>
    ))}
    <button style={{backgroundColor:'palevioletred',fontSize:'16px',width:'100px'}} onClick={stateHandler} className={buttons.button1}>{ctx.isLoggedIn ? 'LOGOUT':'LOGIN'}</button>
    </>
  )
}
export default Buttons
import React, { useContext } from 'react'
import styles from '../CSS/UserProfile.module.css'
import AuthContext from '../Store/AuthContext'
import buttons from '../CSS/MultipleButtons.module.css'
import AuthForm from './AuthForm';
const UserProfile = () => {
    const ctx=useContext(AuthContext);
    const logoutHandler=()=>{
        ctx.logout()
    }
  return (
      <>
     {!ctx.isLoggedIn && <AuthForm/>}
     {ctx.isLoggedIn &&
     <div className={styles.userprofile}>
     <h3>You have not purchased anything.</h3>

     <button onClick={logoutHandler} style={{width:'100px'}} className={buttons.button1} >LOGOUT</button>
     </div>
     }
    </>
  )
}

export default UserProfile
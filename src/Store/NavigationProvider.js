import React from 'react'
import NavigationContext from './NavigationContext'
const NavigationProvider = (props) => {
  return (
    <NavigationContext.Provider value={{}}>{props.children}</NavigationContext.Provider>
  )
}

export default NavigationProvider
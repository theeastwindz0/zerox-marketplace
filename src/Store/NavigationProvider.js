import React from 'react'
import NavigationContext from './NavigationContext'
const NavigationProvider = (props) => {
  return (
    <NavigationContext.Provider value={{buttons:NavigationContext.buttons}}>{props.children}</NavigationContext.Provider>
  )
}

export default NavigationProvider
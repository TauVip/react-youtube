import React from 'react'
import {AlertContext} from './alertContext'

export const AlerState = ({ children }) => {
  return (
    <AlertContext.Provider>
      { children }
    </AlertContext.Provider>
  )
}

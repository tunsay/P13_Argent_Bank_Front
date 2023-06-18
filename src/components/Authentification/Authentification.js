import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import React from 'react'
import { Account } from '../../pages/Account/Account'
import { Login } from '../../pages/Login/Login'

export const Authentification = ({ Child }) => {
  const user = useSelector(selectUser)
  // Boolean ? if true : if false
  switch (Child) {
    case Account:
      return user ? <Child /> : <Navigate to="/login" />

    case Login:
      return user ? <Navigate to="/account" /> : <Child />

    default:
      break
  }
}

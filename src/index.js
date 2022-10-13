import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import Login from './Container/Login'
import Register from './Container/Register'
import GlobalStyles from './styles/globalstyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Register />
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>,
)

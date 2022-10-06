import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './Container/Login'
import GlobalStyles from './styles/globalstyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Login />
    <GlobalStyles />
  </>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './features/Store.js'
import React from 'react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store = {store}>
<React.StrictMode>
<App />
</React.StrictMode>
   </Provider>
  </StrictMode>,
)

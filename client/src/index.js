import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './assets/styles/StudMob.css'
import './assets/styles/index.css'
import {Provider} from 'react-redux'
import store from './store'
import '../node_modules/normalize.css/normalize.css'


ReactDOM.render (

  <Provider store={store}><App /></Provider>,

  
  document.getElementById('root')
)

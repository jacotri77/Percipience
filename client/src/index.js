import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './assets/styles/StudMob.css'
import './assets/styles/index.css'
import {Provider} from 'react-redux'
import store from './store'
import '../node_modules/normalize.css/normalize.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

ReactDOM.render (

  <Provider store={store}><MuiThemeProvider><App /></MuiThemeProvider></Provider>,

  
  document.getElementById('root')
)

import React, { Component } from 'react'
import '../assets/styles/App.css'
// import { addMessage } from '../api/messaging'
import {connect} from 'react-redux'
import LeftBar from './LeftBar'
import Main from './Main'


class App extends Component {

  constructor() {

    super()

    this.state = {

      message: ''

    }
  }

  

  render() {

    return (

      <div
        id='AppCont'>

        <LeftBar />

        <Main />
        
      </div>

    )
  }
}


const mapStateToProps = function(appState) {

  return {

    messages: appState.messages

  }
}



export default connect(mapStateToProps)(App)


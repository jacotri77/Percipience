import React, { Component } from 'react'
import '../assets/styles/Main.css'
import {connect} from 'react-redux'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
  }

  render() {
    return (
      <div
        id='MainCont'>
       
      </div>
    )
  }
}

const mapStateToProps = function(appState) {
  return {
    messages: appState.messages
  }
}

export default connect(mapStateToProps)(Main)




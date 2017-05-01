import React, { Component } from 'react'
import '../assets/styles/LeftBar.css'
import {connect} from 'react-redux'

class LeftBar extends Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
  }

  render() {
    return (
      <div
        id='cLeftBarCont'>
       
      </div>
    )
  }
}

const mapStateToProps = function(appState) {
  return {
    messages: appState.messages
  }
}

export default connect(mapStateToProps)(LeftBar)




import React, { Component } from 'react'
import '../../assets/styles/LeftBar.css'
import {connect} from 'react-redux'

class InstDash extends Component {

  constructor() {
    super()
    this.state = {
      message: ''
    }
  }

  render() {
    return (
      <div
        id='cInsDashCont'>
       
      </div>
    )
  }
}

const mapStateToProps = function(appState) {

  return {

    messages: appState.messages

  }

}

export default connect(mapStateToProps)(InstDash)




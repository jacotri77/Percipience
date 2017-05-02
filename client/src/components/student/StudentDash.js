mport React, { Component } from 'react'
import '../../assets/styles/InstLogin.css'
import {connect} from 'react-redux'


class StudentDash extends Component {


  render() {

    return (






    	)

    }
    
}

const mapStateToProps = function(appState) {
  return {
    messages: appState.messages
  }
}

export default connect(mapStateToProps)(StudentDash)

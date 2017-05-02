import React, { Component } from 'react'
import '../assets/styles/Main.css'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import InstLogin from './inst/InstLogin'
import StudentDash from './student/StudentDash'
import InstDash from './inst/InstDash'
import StudentClassNotes from './student/StudentClassNotes'





class Main extends Component {

  constructor() {

    super()

    this.state = {

      message: ''
      
    }
  }

  render() {

    return (

      <Router>

        <div
          id='MainCont'>
          
          <Route 
            exact={true} 
            path='/' 
            component={InstLogin} />
            
          <Route
            path='/studentDash'
            component={StudentDash} />


          <Route 
            path='/instdash' 
            component={InstDash} />

          <Route
            path='/studentClassNotes'
            component={StudentClassNotes} />


        </div>

      </Router>

    )
  }
}



const mapStateToProps = function(appState) {

  return {

    messages: appState.messages

  }
}



export default connect(mapStateToProps)(Main)




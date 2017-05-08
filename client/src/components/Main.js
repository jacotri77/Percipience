import React, { Component } from 'react'
import '../assets/styles/Main.css'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import LeftBar from './LeftBar'
import TypeSel from './TypeSel'

import InstLogin from './inst/InstLogin'
import InstDash from './inst/InstDash'
import InstRoom from './inst/InstRm'

import StudentClassNotes from './stud/StudentClassNotes'
import StudentDash from './stud/StudentDash'
import StudRoom from './stud/StudRoom'
import StudLogIn from './stud/StudLogIn'



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
      
      <div>


        <div
          id='MainCont'>
        
          <div
            id='ParkerBg'>
          </div>

          <Route 
            exact={true} 
            path='/' 
            component={TypeSel} />

          <Route 
            exact={true} 
            path='/instLogin' 
            component={InstLogin} />
            
          <Route
            path='/studentDash'
            component={StudentDash} />


          <Route 
            path='/instdash' 
            component={InstDash} />

            <Route
            path='/instRoom'
            component={InstRoom} />

            <Route 
            path='/studroom' 
            component={StudRoom} />

          <Route
            path='/studentClassNotes'
            component={StudentClassNotes} />

          <Route
            path='/studLogIn'
            component={StudLogIn} />

          


        </div>
   <LeftBar />
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




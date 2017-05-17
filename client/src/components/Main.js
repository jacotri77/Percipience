import React, { Component } from 'react'
import '../assets/styles/Main.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import TypeSel from './TypeSel'

import InstLogin from './inst/InstLogin'
import InstDash from './inst/InstDash'
import InstRoom from './inst/InstRm'

import StudentDash from './stud/StudentDash'
import StudRoom from './stud/StudRoom'
import StudLogIn from './stud/StudLogIn'



class Main extends Component {

  render() {

    return (

      <Router>
      
        <div>

        <div id="background-video" >
        <video loop autoPlay>
          <source src={require('../assets/videos/Keys.mp4')}  type='video/mp4' />
        </video>

        </div>

        <div
          id="background-videoDiv">
        </div>

        <div
        id='TypeSelCont'>
        </div>

          <div
            id='MainCont'>
        


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
              path='/instRm'
              component={InstRoom} />

              <Route 
              path='/studroom' 
              component={StudRoom} />

            <Route
              path='/studLogIn'
              component={StudLogIn} />

              

          </div>


  
        </div>
      
      </Router>

    )
  }
}


export default Main




import React, { Component } from 'react'
import '../assets/styles/TypeSel.css'
import {connect} from 'react-redux'
// import {addNewTopic} from '../api/perci'

import { Link } from 'react-router-dom'








class TypeSel extends Component {

  constructor() {

    super()

    this.state = {

      redirect: false

    }
  }


//instLogin

  setLogInType() {

    // code
  }


  render() {


    return (

  <div
    id='TypeSelCont'>

    <h1 
      id='loginTitle'> 
      User Selection
    </h1>

    <div
      id='SelRadioCont'>

      <div>

        <Link
          to={'/instLogin/'}>
        
          <div
            id='TypeSelSubBtn'>
            Instructor
          </div>
                
        </Link>
      
      </div>

      <div>

        <Link
          to={'/studLogIn/'}>
        
          <div
            id='TypeSelSubBtn'>
            Student
          </div>
                
        </Link>
          
      </div>

    </div>

  </div>

    )
  }
}



const mapStateToProps = function(appState) {

  return {

    user: appState.user,
    room: appState.room,
    topic: appState.topic

  }

  

}


export default connect(mapStateToProps)(TypeSel)




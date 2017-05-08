import React, { Component } from 'react'
import '../assets/styles/TypeSel.css'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import {addUserType} from '../api/perci'

class TypeSel extends Component {

  constructor() {

    super()

    this.state = {

      redirect: false

    }
  }


  setLogInType(c) {

    if (c === 's') {

      addUserType(false)

    } else {

      addUserType(true)

    }
  }

  // setTimeout(function() {}, 2000);



  render() {





    return (

  <div
    id='TypeSelCont'>


 

    <h1 
      id='TypeSelTitle'> 
      User Selection
    </h1>

    <div
      id='TypeSelBtnCont'>

      <div
        id='SelRadioCont'>

        <div>

          <Link
            to={'/instLogin/'}>
        
            <div
              onClick={this.setLogInType('i')}
              className='TypeSelSubBtn'>
              Instructor
            </div>
                
          </Link>
      
        </div>

        <div>

          <Link
            to={'/studLogIn/'}>
        
            <div
              onClick={this.setLogInType('s')}
              className='TypeSelSubBtn'>
              Student
            </div>
                
          </Link>
          
        </div>

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




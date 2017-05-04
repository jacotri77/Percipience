import React, { Component } from 'react'
import '../../assets/styles/StudentDash.css'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import store from '../../store'


class StudentDash extends Component {

  studDashSubClick(c) {

    console.log(c)
  }

  handleRoomType(e) {

    // code
  }

  render() {


    return (

    	<div
        id='studentDashCont'>

        <h1 
          id='studentDashTitle'> 
          Student Dashboard
        </h1>

        <div
         id='studentDashBox'>

          <form
            id='studentDashForm'>

            <div 
              id='rmNameLbl'>

              <p>
                {`Welcome, ${this.props.user}. Please enter the Room Name to join.`}
              </p>

            </div>

            <div
              id='StudDashLogCont'>

              <input
                id='StudDashRoom' 
                type='text' 
                name='roomname' 
                placeholder='Room Name'/>

              <div
                onClick={this.studDashSubClick(this.state.tRoom)}
                id='StudDashEnterBtn' 
                className='bluBtnGen'>
                Enter Room
              </div>

                
            </div>

            <Link
              to={'/'}>
      
              <div
                className='bluBtnGen'>
                View Class Notes
              </div>
                
            </Link>

          </form>

        </div>

      </div>

    )

    }
    
}


const mapStateToProps = function(appState) {


  this.state = {

      tRoom: appState.room,

    }

  return {

    room: appState.room,
    user: appState.user

  }
}

export default connect(mapStateToProps)(StudentDash)

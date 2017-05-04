import React, { Component } from 'react'
import '../../assets/styles/StudentDash.css'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


class StudentDash extends Component {


  constructor(props) {

    super()

    this.state = {

      room: ''

    }
  }

  studDashSubClick(p) {


  }

  handleRoomType = (e) => {

    if (this.props.room === e.target.value) {

      // alert("Match") 

    }
  }

  render() {


    // console.log('HandleRoom ', this.props)

    return (


    	<div
        id='studentDashCont'>

        <h1 
          id='studentDashTitle'> 
          Student Dashboard
        </h1>

        <div
         id='studentDashBox'>

          <div
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
                onChange={this.handleRoomType}
                id='StudDashRoom' 
                type='text' 
                name='roomname' 
                placeholder='Room Name'/>

              <div
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

          </div>

        </div>

      </div>

    )

    }
    
}


const mapStateToProps = function(appState) {

  return {

    room: appState.room,
    user: appState.user

  }
}

export default connect(mapStateToProps)(StudentDash)

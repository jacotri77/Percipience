import React, { Component } from 'react'
import '../../assets/styles/StudentDash.css'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


class StudentDash extends Component {


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

                  <p
                    htmlFor='roomname'>

                      
                      {`Welcome ${this.props.user}`}

                  </p>

                </div>

                <div
                    id='StudDashLogCont'>

                <input
                  id='rmName' 
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

            </form>

         </div>

      </div>






    	)

    }
    
}

const mapStateToProps = function(appState) {

  return {

    user: appState.user

  }
}

export default connect(mapStateToProps)(StudentDash)

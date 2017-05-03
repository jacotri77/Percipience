import React, { Component } from 'react'
import '../../assets/styles/StudLogIn.css'
import {connect} from 'react-redux'


class StudLogIn extends Component {


  render() {

    return (

      <div
        id='StudLoginCont'>

        <h1 
          id='StudLogInTitle'> 
          Student Log In
        </h1>

        <div
         id='StudLogInBox'>

        <div
          id='StudInpWrap'>

          <div 
            id='StudLog'> 

            <label 
              id='StudUsrNameLab'
              htmlFor='StudUsrName'>
              <p>Username:</p>
            </label>

          </div>    

            <input
              id='StudUsrName'
              type='text' 
              placeholder='Student Name'
              autoComplete='off'/>

        </div>
            <div
              id='StudUsrSubBtn'>
            Submit
            </div>

         </div>

      </div>

      )

    }
    
}

const mapStateToProps = function(appState) {
  return {
    messages: appState.messages
  }
}

export default connect(mapStateToProps)(StudLogIn)




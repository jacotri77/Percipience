import React, { Component } from 'react'
import '../../assets/styles/StudLogIn.css'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import {addUserName} from '../../api/perci'


class StudLogIn extends Component {


  studLogInSubmit() {

    var c = document.getElementById('StudUsrName').value

    addUserName(c) 

  }

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

            
            <Link
              to={'/studentDash/'}>
      
              <div
                onClick={this.studLogInSubmit}
                id='StudUsrSubBtn'>
                Submit
              </div>
                
          </Link>

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




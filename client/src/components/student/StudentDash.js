mport React, { Component } from 'react'
import '../../assets/styles/InstLogin.css'
import {connect} from 'react-redux'


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
                  id='usrNameLbl'>

                  <label
                    htmlFor='username'>

                      Username:

                  </label>

                </div>

                <input
                  id='usrName' 
                  type='text' 
                  name='username' 
                  value='usernameState'
                  placeholder='Username'/>

                <div 
                  id='pWordLbl'>

                  <label
                    htmlFor='username'>

                      Password:

                  </label>

                </div>

                  <input
                  id='pWord'
                  type='password'
                  name='password'
                  value='passwordState'
                  placeholder='Password' />

                <button
                  id='loginButton'
                  type='submit'>

                    Submit

                </button>

            </form>

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

export default connect(mapStateToProps)(StudentDash)

import React, { Component } from 'react'
import '../../assets/styles/InstLogin.css'
import {connect} from 'react-redux'


class InstLogin extends Component {


  render() {

    return (

      <div
        id='InstLoginCont'>

        <div
         id='LoginBox'>

          <form
             id='LoginForm'>

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

export default connect(mapStateToProps)(InstLogin)




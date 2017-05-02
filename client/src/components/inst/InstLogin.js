import React, { Component } from 'react'
import '../../assets/styles/InstLogin.css'
import {connect} from 'react-redux'


class InstLogin extends Component {


  render() {

    return (

      <div
        id='InstLoginCont'>

        <div
         id='loginBox'>

          <form
             id='loginForm'>

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
                  placeholder='Username'
                  autoComplete='off'/>

                <div 
                  id='pWordLbl'> 

                  <label
                    htmlFor='password'>

                      Password:<br />
                      password should be at least 6 characters

                  </label>

                </div>  

                <input
                  id='pWord'
                  type='password'
                  name='password'
                  value='passwordState'
                  placeholder='Password'
                  autoComplete='off' />

                <button
                  type='submit'
                  id='loginButton'>

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




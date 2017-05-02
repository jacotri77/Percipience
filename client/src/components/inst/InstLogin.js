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

                <input 
                  type='text' 
                  name='username' 
                  value='usernameState'
                  placeholder='Username'/>

                <input
                  type='password'
                  name='password'
                  value='passwordState'
                  placeholder='Password' />

                <button
                  type='submit' />

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




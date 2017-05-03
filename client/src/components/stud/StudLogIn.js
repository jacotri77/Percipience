import React, { Component } from 'react'
import '../../assets/styles/InstLogin.css'
import {connect} from 'react-redux'


class StudLogIn extends Component {


  render() {

    return (

      <div
        id='InstLoginCont'>

          <h1 
            id='loginTitle'> 

              Student Log In

          </h1>

        <div
         id='loginBox'>

        

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
                  placeholder='Student Name'
                  autoComplete='off'/>

            

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




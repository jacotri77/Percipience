import React, { Component } from 'react'
import '../../assets/styles/InstLogin.css'
import {connect} from 'react-redux'
//

class InstLogin extends Component {
  constructor(){
    super()
    this.state ={
      username: '',
      password: ''
    }
  }

handleChange =(e) =>{
    
    this.setState({
      
      [e.name.value] : e.target.value

  })

  }

handleSubmit = (e) =>{
  e.preventDefault()
  this.props.history.push('/instRoom')

}
 
  render() {

    return (

      <div
        id='InstLoginCont'>

          <h1 
            id='loginTitle'> 

              Please Provide Your Login Information

          </h1>

        <div
         id='loginBox'>

          <form
             id='loginForm'
              onSubmit={this.handleSubmit}>

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
                  
                  autoComplete='off'
                  onChange={this.handleChange} />

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
                    
                    autoComplete='off' 
                    onChange={this.handleChange}/>

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




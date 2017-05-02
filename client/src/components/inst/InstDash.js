import React, { Component } from 'react'
import '../../assets/styles/InstDash.css'
import {connect} from 'react-redux'


class InstDash extends Component {

  constructor() {

    super()

    this.state = {

      message: ''

    }
  }


  render() {

    return (

      <div
<<<<<<< HEAD
        id='cInsDashCont'>
=======
        id='InstDashCont'>
>>>>>>> 0eedbaa67493a1a9c50ed40e845af60494739fc9

        <h1
          id='InstDashHeader'>
          Dashboard
        </h1>

        <div
          id='InstDashFrame'>

          
          <div
            id='AddRoomCont'>

            <img
              id='AddRoomImg' 
              alt='Plus'
              src={require('../../assets/images/plus.png')} />

            <h2
              className='dashH2'>
              Create Room
            </h2>

          </div>

          <div
            id='AddNoteCont'>


            <img
              id='AddNoteImg' 
              alt='Plus'
              src={require('../../assets/images/plus.png')} />

            
            <h2
              className='dashH2'>
              Create Class Notes
            </h2>

            <input 
              id='AddNoteInp'
              type='text' 
              name='roomname'
              placeholder='Class Note Name'/>

          </div>

        </div>
<<<<<<< HEAD

       
=======
         
>>>>>>> 0eedbaa67493a1a9c50ed40e845af60494739fc9
      </div>

    )
  }
}



const mapStateToProps = function(appState) {

  return {

    messages: appState.messages

  }

}


export default connect(mapStateToProps)(InstDash)




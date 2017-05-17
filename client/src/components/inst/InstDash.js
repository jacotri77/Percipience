import React, { Component } from 'react'
import '../../assets/styles/InstDash.css'
import {connect} from 'react-redux'
import {addRoomName} from '../../api/perci'
import { Link } from 'react-router-dom';
// browserHistory.push('/some/path');


class InstDash extends Component {


  addRoomClick () {

    addRoomName()
  }


  render() {
    return (


      <div
        id='InstDashCont'>

<img
              id='PerciImg' 
              alt='Plus'
              src={require('../../assets/images/perci.png')} />

        <h1
          id='InstDashHeader'>

          Instructor Dashboard

        </h1>

        <div
          id='currUser'>

         <p> {`Welcome ${this.props.user} ! `}</p> 

        </div>

        <div
          id='InstDashFrame'>

          <Link
            to='/instRm'
            id='instDashLink'>

          <div
            id='AddRoomCont'
            onClick={this.addRoomClick}>

            <div>
            <img
              id='AddRoomImg' 
              alt='Plus'
              src={require('../../assets/images/plus.png')} />

            </div>

            <h2
              className='dashH2'>
              Create Room
            </h2>

          </div>
          
          </Link>

       

        <div
          id='linkDiv'>

          <Link
            to='/'
            id='instDashLink'>

             <div
                className='bluBtnGen'>

                  Logout

            </div>

        </Link>

        </div>

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


export default connect(mapStateToProps)(InstDash)




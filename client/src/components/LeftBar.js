import React, { Component } from 'react'
import '../assets/styles/LeftBar.css'
import {connect} from 'react-redux'

import { Link } from 'react-router-dom'


class LeftBar extends Component {

  constructor() {

    super()

    this.state = {

      message: ''

    }
  }


  render() {

    return (

      <div
        id='cLeftBarCont'>

        <input
          id='cNoteTitle'
          name='classNoteTitle'
           />

        <div
          id='notesCont'>

            <ul>

              <li>

                <Link
                  to={'/'}>
              
                  <p>
                    Home/Root
                  </p>

                </Link>

              </li>
              <li>
                
                <Link
                  to={'/studentDash/'}>
              
                  <p>
                    Stud Dash
                  </p>

                </Link>

              </li>
              <li>
                
                <Link
                  to={'/instdash/'}>
              
                  <p>
                    Inst Dash
                  </p>

                </Link>

              </li>

              <li>
                
                <Link
                  to={'/instRoom/'}>
              
                  <p>
                    Inst Room
                  </p>

                </Link>

              </li>


              <li>
                
                <Link
                  to={'/studroom/'}>
              
                  <p>
                    Student Room
                  </p>

                </Link>

              </li>

              <li>
                
                <Link
                  to={'/studLogIn/'}>
              
                  <p>
                    Student LogIn
                  </p>

                </Link>

              </li>

            </ul>

            

        </div>

        

        <button 
          id='backButton'>

          Back to Dashboard

        </button>
      
      </div>
    )
  }
}

const mapStateToProps = function(appState) {
  return {
    messages: appState.messages
  }
}

export default connect(mapStateToProps)(LeftBar)




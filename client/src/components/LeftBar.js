import React, { Component } from 'react'
import '../assets/styles/LeftBar.css'
import {connect} from 'react-redux'

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
          value='classnoteState' />

        <div
          id='notesCont'>

            <ul>

              <li>Note 1</li>
              <li>Note 2</li>
              <li>Note 3</li>

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




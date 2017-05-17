import React, { Component } from 'react'
import '../assets/styles/App.css'
import Main from './Main'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

class App extends Component {
	

  render() {

    return (

      <div
        id='AppCont'>

        


        <Main />
     
      </div>

    )
  }
}


export default App


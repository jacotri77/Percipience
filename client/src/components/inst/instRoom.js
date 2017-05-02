import React, { Component } from 'react'
import '../../assets/styles/InstRoom.css'
import {connect} from 'react-redux'
import {addNewTopic} from '../../api/perci'


class InstRoom extends Component {

  constructor() {

    super()

    this.state = {

      message: ''

    }
  }



  setNewTopic() {

    var c = document.getElementById('InstRoomAddTopicInp').value

    addNewTopic(c)

    document.getElementById('InstRoomAddTopicInp').value = ''

  }

  render() {

    return (

      <div
        id='InstRoomCont'>

        <h1
          id='InstRoomCurrTopic'>
          {this.props.topic}
        </h1>

        <h4
          id='InstRoomName'>
          {this.props.room}
        </h4>

        <input 
          id='InstRoomAddTopicInp'
          type='text' 
          name='roomname'
          placeholder='Topic'/>

        <div
          id='SetTopicBtn'
          onClick={this.setNewTopic}>
        Set Topic
        </div>

      </div>

    )
  }
}



const mapStateToProps = function(appState) {

  return {

    user: appState.user,
    room: appState.room,
    topic: appState.topic

  }

  

}


export default connect(mapStateToProps)(InstRoom)




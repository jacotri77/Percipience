import React, { Component } from 'react'
import '../../assets/styles/InstRoom.css'
import {connect} from 'react-redux'
import {addNewTopic} from '../../api/perci'
import PieChart from '../charts/pieChart'


class InstRoom extends Component {

  constructor() {

    super()

    this.state = {

      messages: ''

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
          {this.props.curr_topic}
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

        <div
          id='currUser'>

          {this.props.user}

        </div>

          <PieChart />

      </div>

    )
  }
}



const mapStateToProps = function(appState) {

  return {

    user: appState.user,
    room: appState.room,
    curr_topic: appState.curr_topic

  }

  

}


export default connect(mapStateToProps)(InstRoom)




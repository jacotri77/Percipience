import React, { Component } from 'react'
import '../../assets/styles/InstRoom.css'
import {connect} from 'react-redux'
import {addNewTopic} from '../../api/perci'
<<<<<<< HEAD:client/src/components/inst/instRoom.js
import PieChart from '../charts/pieChart'

=======
// import {Bar} from 'react-chartjs-2'
import PieChart from '../charts/pieChart'
>>>>>>> master:client/src/components/inst/InstRm.js





class InstRoom extends Component {



  setNewTopic() {

    var c = document.getElementById('InstRoomAddTopicInp').value

    addNewTopic(c)

    document.getElementById('InstRoomAddTopicInp').value = ''

  }

  render() {
    
    return (

      <div
        id='InstRoomCont'>

        <div 
          id='InstTopicCont'>

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

        </div>

<<<<<<< HEAD:client/src/components/inst/instRoom.js
=======
        <div>
       
          <PieChart />
        </div>
>>>>>>> master:client/src/components/inst/InstRm.js
        
        <PieChart />
      </div>

    )
  }
}



const mapStateToProps = function(appState) {



  return {

    user: appState.user,
    room: appState.room,
    curr_topic: appState.curr_topic,
    comp_list: appState.comp_list,
    user_scale:appState.user_scale


  }


}


export default connect(mapStateToProps)(InstRoom)




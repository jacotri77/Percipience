import React, { Component } from 'react'
import '../../assets/styles/InstRoom.css'
import {connect} from 'react-redux'
import {addNewTopic} from '../../api/perci'
import {Bar} from 'react-chartjs-2'






class InstRoom extends Component {

  constructor(props) {

    super(props)

     this.state = {
      data: {
        labels: ['bob', 'steve', 'alan', 'caleb'],
        datasets: [{
          data:  props.user_scale,
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',

            }

          ] 

        }

      }
     
    }

  componentWillMount(){
    this.setState({ 
      data: {
        labels: ['bob', 'steve', 'alan', 'caleb'],
        datasets: [{
          data: [this.props.user_scale],
          label: 'Current Topic Comprehension',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',

        }

        ] 
      }
    })
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

        <h4
          id='InstRoomComp'>
          {'Comprehension ' + this.props.comp_list}
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

        <div>
       
          <Bar
            data={this.state.data} 
            width={350}
            height={350}
            options={{
               maintainAspectRatio: false,
               title: {
                display: true,
                text: 'Topic Average Comprehension',
  
               }
             }} redraw/>
        </div>
        
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




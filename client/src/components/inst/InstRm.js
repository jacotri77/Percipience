import React, { Component } from 'react'
import '../../assets/styles/InstRoom.css'
import {connect} from 'react-redux'
import {addNewTopic} from '../../api/perci'
import PieChart from '../charts/pieChart'
import UserGraph from '../charts/userGraph'
import {Link} from 'react-router-dom'







class InstRoom extends Component {

  constructor(props) {

    super(props)

    this.state = {

      topic: ''
    }

    
  }

  setNewTopic = () => {

    var c = this.state.topic

    addNewTopic(c)

    this.setState({

      topic: ''

    })
  }

  handleChange  = (e) => {

    this.setState({

      topic: e.target.value

    })

  }

  handleKeyPress = (e) => {

    if(e.key === 'Enter'){
    
      this.setNewTopic()

    }
}

  render() {

    
    return (

      <div
        id='InstRoomCont'>

      <img
              id='PerciImg' 
              alt='Plus'
              src={require('../../assets/images/perci.png')} />


        <div 
          id='InstTopicCont'>

          <div
          id='activeUsers'>

              <ul>Active Users

                {this.props.ssList.map((stud_user, i) => {


                  return (
                            
                    <li 
                     key={i}>
                      {stud_user}
                    </li>   
                      
                    )
                })
              }
               </ul> 
        

        </div>

        <h1
          id='InstRoomCurrTopic'>
          {this.props.curr_topic}
        </h1>

        <div 
          id="topicCont">

            <h3
              id='instRoomPl'>

              Room Name:

            </h3>

              <h3
              id='InstRoomName'>
              {this.props.room}
            </h3>

            <input 
              id='InstRoomAddTopicInp'
              onKeyPress={this.handleKeyPress}
              onChange={this.handleChange}
              type='text' 
              name='roomname'
              value={this.state.topic}
              placeholder='Topic'/>

            <div
              id='SetTopicBtn'
              onClick={this.setNewTopic}>
            Set Topic
            </div>

          </div>

        </div>
        
      <PieChart />

      <UserGraph />

      <div
        id='linkDiv'>

          <Link
            to='/instDash'
            id='instDashLink'>

             <div
                className='bluBtnGen'>

                  End Class

            </div>

        </Link>

        </div>
       
      </div>

    )
  }
}



const mapStateToProps = function(appState) {



  return {

    user: appState.user,
    room: appState.room,
    ssList: appState.ssList,
    curr_topic: appState.curr_topic,
    comp_list: appState.comp_list,
    user_scale:appState.user_scale,
    stud_user: appState.stud_user



  }


}


export default connect(mapStateToProps)(InstRoom)




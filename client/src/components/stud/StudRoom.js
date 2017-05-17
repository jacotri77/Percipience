import React, { Component } from 'react'
// import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import { gathData } from '../../api/perci'




class StudRoom extends Component {

  constructor(props) {

    super(props)

    this.state = {

      user: '',
      value: 0
    }

    this.slideChange = this.slideChange.bind(this)
    
  }


  slideChange  = (event) => {

    
    this.setState({

      value: event.target.value

    })

  }

  slideIncrement = (event) => {

    var sldVal = event.target.value

  if(this.state.value >= 10) {
    return this.setState({
      value: 10
    })
  } else {
    return this.setState({

      value: sldVal + 1

    })
  }

  }

  slideDecrement = (event) => {

    var sldVal = event.target.value

  if(this.state.value <= 0) {
    return this.setState({
      value: 0
    })
  } else {
    return this.setState({

      value: sldVal - 1

    })
  }
  }




  rtd = setInterval( ()=> { 

    var c = Number(document.getElementById('StudRoomSlide').value)

      gathData({

        user: this.props.user,
        comp: c,
        topic: this.props.curr_topic
      })

  }, 1000)



  render() {

    

    return (
    

      <div
        id='StudRoomCont'>

        <div
          id='StudRoomTopBar'>

          <h1
            id='StudRoomTopic'>
            {this.props.curr_topic}
          </h1>

        </div>

        <div
          id='StudRoomForm'>

          <h2
            id='StudRoomRateH2'>Rate your comprehension of the above topic.</h2>

          <div
            id='StudRoomScore'>

             <i className="fa fa-minus-square fa-4x" aria-hidden="true" onClick={this.slideDecrement} ></i>
            
          <p id='StudRoomSlideNum'>{this.state.value}</p>

          <i className="fa fa-plus-square fa-4x" aria-hidden="true" onClick={this.slideIncrement}></i>

          

          

          </div>

          

          <div
            id='StudRoomSlideCont'>

            <div>

              <p>0</p>

            </div>

            <input 
              id="StudRoomSlide" 
              onChange={this.slideChange}
              type="range" 
              min="0" 
              max="10" 
              step="1"
              value={this.state.value} />

            <div>

              <p>10</p>

            </div>

          </div>

          <div
            id='mobIcon'>

          <i className="fa fa-minus-square fa-4x" aria-hidden="true" onClick={this.slideDecrement}></i>
            
          <i className="fa fa-plus-square fa-4x" aria-hidden="true" onClick={this.slideIncrement}></i>


          </div>

          <div

            id='userRoomCont'>

            <div

              id='StudRoomUserCont'>

              User: {this.props.user}

            </div>

            <div
            
              id='StudRoomRoomCont'>

              Room:  {this.props.room}

            </div>

          </div>
         

        </div>

        
      </div>
    )
  }
}



const mapStateToProps = function(appState) {

  return {

    user: appState.stud_user,
    room: appState.room,
    curr_topic: appState.curr_topic
  }

}


export default connect(mapStateToProps)(StudRoom)




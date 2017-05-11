import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import {Bar} from 'react-chartjs-2'
// updateGrph
import {updateGrph} from '../../api/perci'
import {addUsers} from '../../api/perci'


setInterval(function(){ updateGrph(); }, 1000);
setInterval(function(){ addUsers(); }, 1000);

class UserGraph extends Component {

  

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
          backgroundColor: 'rgba(128,191,255,0.2)',
          borderColor: 'rgba(128,191,255,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',

        }

        ] 
      }
    })
  }


  

  render() {
    
    return (

       
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
  
               },

               scales: {
                    xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Topic'
                            }
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 1,
                                stepValue: 5,
                                max: 10
                            }
                            }]
                          }
             }}/>
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


export default connect(mapStateToProps)(UserGraph)


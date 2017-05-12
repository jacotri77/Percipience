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
        labels: [this.props.stud_user],
        datasets: [{
          data:  props.user_scale,
          label: 'My First dataset',
          fontColor:'rgb(128,191,255)',
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
        labels: [this.props.stud_user],
        datasets: [{
          data: [this.props.user_scale],
          label: 'Current Topic Comprehension',
          fontColor:'rgb(128,191,255)',
          pointBackgroundColor: 'white',
          backgroundColor: 'rgba(128,191,255,0.2)',
          borderColor: 'white',
          borderWidth: 1,
          hoverBorderColor: 'red',
          hoverBackgroundColor: 'red'

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
            height={450}
            options={{
               maintainAspectRatio: false,
               responsive: true,
               tooltips: {

                  enabled: true,
                  titleFontFamily:'Baloo',
                  titleFontColor: 'rgb(128,191,255)',


               },
               title: {
                display: true,
                text: 'User Votes',
                fontColor:'rgb(128,191,255)',
                fontSize: 18,
                fontFamily: 'Baloo'
      
               },

               scales: {
                    xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                    
                                 
                            },
                            gridLines :{
                              color:'rgba(128,191,255, .8)'
                            },
                            ticks: {
                                fontColor: 'white',
                                fontFamily: 'Baloo'

                              }
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 1,
                                stepValue: 5,
                                max: 10,
                                fontColor: 'white',
                                fontFamily: 'Baloo'
                            },
                            gridLines :{
                              color:'rgba(128,191,255, .8)'
                            }
                            }],

                            legend: {
                              display: true,
                              labels: {
                                fontColor:'rgb(128,191,255)',
                                fontFamily: 'Baloo'
                              }
                          }
                        }
             }}/>
        </div>
        
    

    )
  }
}



const mapStateToProps = function(appState) {



  return {

    stud_user: appState.stud_user,
    room: appState.room,
    curr_topic: appState.curr_topic,
    comp_list: appState.comp_list,
    user_scale:appState.user_scale


  }


}


export default connect(mapStateToProps)(UserGraph)


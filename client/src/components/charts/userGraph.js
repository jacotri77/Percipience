import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import {Bar} from 'react-chartjs-2'
// updateGrph
// import {updateGrph} from '../../api/perci'
// import {addUsers} from '../../api/perci'


// setInterval(function(){ updateGrph(); }, 1000);
// setInterval(function(){ addUsers(); }, 1000);

class UserGraph extends Component {


  render() {

    console.log(this.props.cdata, 'usergraph')
    
    return (

       
        <div>
       
          <Bar
            data={this.props.cdata} 
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

    cdata: appState.cdata


  }


}


export default connect(mapStateToProps)(UserGraph)


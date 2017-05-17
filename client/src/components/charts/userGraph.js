import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import {Bar} from 'react-chartjs-2'


class UserGraph extends Component {


  render() {

    // console.log(this.props.cdata, 'usergraph')
    
    return (

       
        <div>
       
          <Bar
            data={this.props.cdata} 
            width={350}
            height={375}
            options={{
               maintainAspectRatio: false,
               responsive: true,
               tooltips: {

                  enabled: true,
                  titleFontFamily:'Work Sans',
                  titleFontColor: 'rgb(128,191,255)',


                },

               title: {
                display: true,
                text: 'User Comprehension',
                fontColor:'rgb(128,191,255)',
                fontSize: 18,
                fontFamily: 'Work Sans'
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
                                fontFamily: 'Work Sans',

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
                                fontFamily: 'Work Sans'
                            },
                            gridLines :{
                              color:'rgba(128,191,255, .6)'
                            }
                            }]
                        },

                    legend: {
                      display: true,
                      labels: {
                        fontColor:'rgb(128,191,255)',
                        fontFamily: 'Work Sans'
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


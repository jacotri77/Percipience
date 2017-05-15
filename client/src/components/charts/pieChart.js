import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import {Line} from 'react-chartjs-2'
// updateGrph
// import {updateGrph} from '../../api/perci'
// import {addUsers} from '../../api/perci'



// setInterval(function(){ updateGrph(this.props.gdata) }, 1000);
// setInterval(function(){ addUsers(); }, 1000);






class PieChart extends Component {

  render() {
 
    // console.log(this.props.gdata)


	 return (

    <div>
       

        <Line
          data={this.props.gdata}
          id='PieChart'
          width={200}
          height={450}
          options={{
             maintainAspectRatio: false ,
             responsive: true,
             tooltips: {

                  enabled: true,
                  titleFontFamily:'Baloo',
                  titleFontColor: 'rgb(128,191,255)',


               },
             title: {
              display: true,
              text: 'Topic Average Comprehension',
              fontColor:'rgb(128,191,255)',
              fontSize: 18,
              fontFamily: 'Baloo'
             },

             scales: {
                    xAxes: [{
                            display: true,
                            ticks: {
                              fontColor: 'white'
                            },
                            scaleLabel: {
                                display: true,
                                
                            },
                            gridLines :{
                              color:'rgba(128,191,255, .8)'
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
                            gridLines:{
                              color:'rgba(128,191,255, .6)'
                            }
                            }]
                  },
              legend: {
                display: true,
                labels: {
                  fontColor:'rgb(128,191,255)',
                  fontFamily: 'Baloo'
                }

              }
}}

            />

              

      </div>
		)

	}
}

	const mapStateToProps = function(appState) {

  		return {

    		gdata: appState.gdata

  }

}


export default connect(mapStateToProps)(PieChart)




   

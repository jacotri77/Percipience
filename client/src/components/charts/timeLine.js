import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import {Line} from 'react-chartjs-2'
import moment from 'moment'
import {updateTime} from '../../api/perci'
// updateGrph






class TimeLine extends Component{



  constructor(props){
    super(props)


    this.state ={

        tdata: {
          labels: [moment()],
          title: {
              text: "Date Time Formatting"
                },
                datasets: [{
                    label:" ",
                    data: [this.props.tpc_list],
                    backgroundColor: 'rgba(255,99,132,.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    pointHitRadius: 5
                  }]

              }
        }
   
    }
  
  render(){
  console.log(this.props.curr_topic, "render")
  console.log(this.props.tpc_list, "render")

  



	return(

   <div>
       

        <Line
          data={this.state.tdata}
          width={300}
          height={150}
          options={{
             maintainAspectRatio: false,
             title: {
              display: true,
              text: 'Topic TimeLine',
              fontColor:'rgb(128,191,255)',
              fontSize: 18,
              fontFamily: 'Baloo'
             },
          scales: {

              xAxes: [{
          
                  gridLines :{
                      color:'rgba(128,191,255, .8)'
                  },
                  
                  scaleLabel: {
                      display: true,
                  },

                  type: 'time',
                  time: {
                        parser: false,
                        unit: "second",
                        round: false,
                         displayFormats: {
                                max: moment().startOf('year'),
                                min: moment().endOf('year'),
                                'millisecond': 'SSS [ms]',
                                'second': 'h:mm:ss a', // 11:20:01 AM
                                'minute': 'h:mm:ss a', // 11:20:01 AM
                                'hour': 'MMM D, hA', // Sept 4, 5PM
                                'day': 'MMM Do', // Sep 4 2015
                                'week': 'll', // Week 46, or maybe "[W]WW - YYYY" ?
                                'month': 'MMM YYYY', // Sept 2015
                                'quarter': '[Q]Q - YYYY', // Q3
                                'year': 'YYYY', // 2015
                                    },
                          
                      
                      
                  },
                  ticks: {
                    beginAtZero: false,
                    min: 1,
                    fontColor: 'white',
                    fontFamily: 'Baloo'

                  }
            }],
            yAxes: [{
              id: 'y-axis-1',
              display:true,
              type: 'linear',
              ticks: {
                min: 0,
                max: 1,
                maxTicksLimit:1,
                stepsSize: 1,
                beginAtZero: true,
                userCallback: function(label, index, labels) {
                     if (Math.floor(label) === label) {
                         return label
                    }},
                fontColor: 'white',
                fontFamily: 'Baloo'
              },
              scaleLabel: {
                    display: true,
                    labelString: 'Topic Name',
                    fontColor: 'white',
                    fontFamily: 'Baloo'
                    },

              gridLines :{
                    color:'rgba(128,191,255, .8)'
                  },

            }]
          },
    
      
    }}
            />

      </div>
		)

	}
}

	const mapStateToProps = function(appState) {

  		return {

    		gdata: appState.gdata,
        curr_topic: appState.curr_topic,
        tpc_list: appState.tpc_list

  }

}


export default connect(mapStateToProps)(TimeLine)




   

import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import {Line} from 'react-chartjs-2'
// updateGrph
import {updateGrph} from '../../api/perci'



setInterval(function(){ updateGrph(); }, 1000);






class PieChart extends Component{


    // constructor(props){
    //   super(props)
     
  //       let values = this.props.gdata.datasets.map(data =>(
  //         data.data))
  //           if(values.length > 0){
  //             return values.length
  //           }else{
  //             return 0
  //           }

  //       let sum = values[0].reduce(( previous, current) => Number(current) + Number(previous))
  //       let avg = (sum / values.length)
  //       console.log(values[0])

  //             console.log(values, 'from constructor')  
  //             console.log(avg, "from constructor")


  //            this.state ={
  //           data: {
  //             labels: [this.props.gdata.labels],
  //             datasets: [{
  //             data:  avg,
             
  //               backgroundColor: 'rgba(255,99,132,.2)',
  //               borderColor: 'rgba(255,99,132,1)',
  //               borderWidth: 1,
  //               hoverBackgroundColor: 'rgba(255,99,132,0.4)',
  //               hoverBorderColor: 'rgba(255,99,132,1)',

  //              }]
  //   }
  // }
  // }
  render(){
 
  console.log(this.props.gdata, "render")
  



	return(

   <div>
       

        <Line
          data={this.props.gdata}
          width={350}
          height={350}
          options={{
             maintainAspectRatio: false,
             title: {
              display: true,
              text: 'Topic Average Comprehension',
              fontColor:'rgb(128,191,255)',
              fontSise: 18
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
                                fontColor: 'white'
                            },
                            gridLines:{
                              color:'rgba(128,191,255, .6)'
                            }
                            }]
                  },
              legend: {
                display: true,
                labels: {
                  fontColor:'rgb(128,191,255)'
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




   

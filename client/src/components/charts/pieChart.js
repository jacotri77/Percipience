import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import {Chart} from 'react-google-charts'

   

class PieChart extends Component{
  constructor(props){
    super(props)

    this.state = {

      options: {
        title: 'Current Topic Votes',
        legend: 'toggle',
        is3D: true,
        legent: 'left',
        hAxis: { title: 'comprehension level', minValue: 0, maxValue: 10},
        vAxis: { title: 'votes', minValue: 0, maxValue: 30 }
    
    },

    data:[

       ['comprehension level', 'votes'],
        [1, 4],
        [10, 10],
        [7, 4],
        [4, 8],
        [6, 5],

    ],

  }
}

render(){
	return(

    <div 
      id="chart_div">

      <Chart
        chartType="ColumnChart"
        data={this.state.data}
        options={this.state.options}
        graph_id="PieChart"
        width="100%"
        height="400px"
        legend_toggle />

    </div>

		)

	}
}

	const mapStateToProps = function(appState) {

  		return {

    		user: appState.user

  }

}


export default connect(mapStateToProps)(PieChart)




   

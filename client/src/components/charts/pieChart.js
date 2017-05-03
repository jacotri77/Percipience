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
        is3D: false,
        legent: 'left'
    
    },

    data:[

       ['student', 'votes'],
        ['4', 7],
        ['10', 3],
        ['4', 5],
        ['3', 3],
        ['6', 12],

    ],

  }
}

render(){
	return(

    <div 
      id="chart_div">

      <Chart
        chartType="PieChart"
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

    		messages: appState.messages

  }

}


export default connect(mapStateToProps)(PieChart)




   

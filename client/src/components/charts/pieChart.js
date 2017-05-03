import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import {Chart} from 'react-google-charts'

   

class PieChart extends Component{
  constructor(props){
    super(props)

    this.state = {

      options: {
        title: 'Not Pushing to Master',
        legend: 'none'
    
    },

    rows:[

       ['8', 12],
        ['4', 5.5],
        ['11', 14],
        ['4', 5],
        ['3', 3.5],
        ['6.5', 7],

    ],

    columns:[

    { 
      type: 'string',
      label: 'Id'
    },

      {
        type: 'number',
        label: 'Comp Level'

      },

    ],

  }
}

render(){
	return(

    <div 
      id="chart_div">

      <Chart
        chartType="PieChart"
        rows={this.state.rows}
        columns={this.state.columns}
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




   

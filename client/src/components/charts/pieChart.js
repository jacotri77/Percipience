import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import {Chart} from 'react-google-charts'
import {addCompLvl} from '../../api/perci'
   

class PieChart extends Component{
  constructor(props){
    super(props)
    this.state = {
      options: {
        title: 'Not Pushing to Master',
        legend: 'none'
    
      },


     data:[
     {
      this.chartData

    }]
    

    }
   
      addCompLvl()
  }


render(){
	return(

    <div 
      id="chart_div">

      <Chart
        chartType="PieChart"
        data={this.props.chartData}
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




   

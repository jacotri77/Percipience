import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import {Bar} from 'react-chartjs-2'


class PieChart extends Component{
  constructor(props){
    super(props)
     this.setState ={

    data: [1],
   
  }
}
     

render(){
 
	return(
   <div>
       
        <Bar
          data={this.props.comp_list} 
          width={350}
          height={350}
          options={{
             maintainAspectRatio: false,
             title: {
              display: true,
              text: 'Topic Average Comprehension'
             }
           }}/>
      </div>
		)

	}
}

	const mapStateToProps = function(appState) {

  		return {

    		comp_list: appState.comp_list

  }

}


export default connect(mapStateToProps)(PieChart)




   

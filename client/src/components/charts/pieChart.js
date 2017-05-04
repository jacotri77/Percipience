import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import {Bar} from 'react-chartjs-2'

const data = {
  labels: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ],
  datasets: [{
    label: '# of votes',
    data: [300, 50, 100, 20, 40, 100, 35, 65],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#FREE56',
    '#FFCE47',
    '#FFCE12',
    '#EECE56',
    '#AACE56',
    '#RRCE56',
    '#FFCE56',
    '#FFCE56',

    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
}

class PieChart extends Component{
  

render(){
	return(
   <div>
       
        <Bar
          data={data} 
          width={350}
          height={350}
          options={{
             maintainAspectRatio: false,
             title: {
              display: true,
              text: 'Custom Chart Title'
             }
           }}/>
      </div>
		)

	}
}

// 	const mapStateToProps = function(appState) {

//   		return {

//     		user: appState.user

//   }

// }


export default PieChart




   

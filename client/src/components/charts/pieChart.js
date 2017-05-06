import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import {Line} from 'react-chartjs-2'
// updateGrph
import {updateGrph} from '../../api/perci'



// 

setInterval(function(){ updateGrph(); }, 3000);

var cdata: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
          }]
        }


class PieChart extends Component{

  constructor(props){
    super(props)
     this.state ={

    cdata: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
          }]
        } 
   
  }
}



 




render(){
 
  console.log(this.props.gdata)
  


  

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
              text: 'Topic Average Comprehension'
             }

           }} />
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




   

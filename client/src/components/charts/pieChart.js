import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'
import {Bar} from 'react-chartjs-2'
import {addCompLvl} from '../../api/perci'



class PieChart extends Component{
  constructor(props) {
    super(props)
    this.state = {
      data: {
        labels: [props.curr_topic],
        datasets: [{
          data: props.comp_list,
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',

            }

          ] 

        }

      }
     
    }

  componentWillReceiveProps(){
    this.setState({ 
      data: {
        labels: [this.props.curr_topic],
        datasets: [{
          data: [this.props.comp_list],
          label: 'Current Topic Comprehension',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',

        }

        ] 
      }
    })
  }
  render(){
 
	return(
   <div>
       
        <Bar
          data={this.state.data} 
          width={350}
          height={350}
          options={{
             maintainAspectRatio: false,
             title: {
              display: true,
              text: 'Topic Average Comprehension'
             }
           }} redraw/>
      </div>
		)

	}
}

	const mapStateToProps = function(appState) {

  		return {

    		comp_list: appState.comp_list,
        user: appState.user,
        room: appState.room,
        curr_topic: appState.curr_topic,
        user_scale: appState.user_scale


  }

}


export default connect(mapStateToProps)(PieChart)




   

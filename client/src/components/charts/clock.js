import React, { Component } from 'react'
import $ from 'jquery'
// import moment from 'moment'

const styles = {
		fontSize: 40,
		padding: 20,
	
}
// const dateTime ='2016-05-02T00:00:00'

class ClockTime extends Component {
	constructor (){
		super()

		this.state= {
	 
	 // moment: moment(dateTime).format('LTS')

		}
	}
	
	
	

  componentDidMount() {
    $(document).ready(function(){
	var dd = "AM"
	setInterval (function(clockStart){
  var newDate = new Date()
  var hh = newDate.getHours()
  var m = newDate.getMinutes()
  var s = newDate.getSeconds()
  

  	if(hh >= 12){

  		hh -= 12
  		dd = "PM"
  	} 

  	if (hh === 0) {
  		hh = 12
  	}
  m = newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes()
  s = newDate.getSeconds() < 10 ? "0" + newDate.getSeconds() : newDate.getSeconds()


  var correction = hh + ":" + m + ":" + s + " " + dd

  $("#finalCountdown").html(`${correction}`)

}, 1000)


})

  }
  render() {
  	

    return (

    	<div className="headRow">
      <div id="finalCountdown" style={styles}>
    
        
      </div>
    </div>
    )
  }
}

export default ClockTime
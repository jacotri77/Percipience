import React, { Component } from 'react'
import $ from 'jquery'


class ClockTime extends Component {


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
    return <div className="head row">
      <div id="finalCountdown">
        
      </div>
    </div>
  }
}

export default ClockTime
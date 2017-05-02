import React, { Component } from 'react'
import '../../assets/styles/StudRoom.css'
import {connect} from 'react-redux'




class PieChart extends Component{

render(){
	return(



		)

	}
}

	const mapStateToProps = function(appState) {

  		return {

    		messages: appState.messages

  }

}


export default connect(mapStateToProps)(PieChart)


<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
            <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript">

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var jsondata = $.ajax({
          url: "db.json",
          dataType: "json",
          async: false,
        }).responseText;

        var data = new google.visualization.DataTable(jsonData);

      

        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    </script>
    <script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>

  <div id="chart_div"></div>


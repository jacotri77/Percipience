import React, {Component} from 'react'
import Slider from 'react-rangeslider'
import '../assets/styles/rangeSlider.css'

class HorizontalCustomLabels extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      horizontal: 10,
    }
  }

  handleChangeHorizontal = (value) => {
    this.setState({
      horizontal: value
    })
  }

  render () {
    const { horizontal } = this.state
    const horizontalLabels = {
      0: '0',  
      10: '10'
    }

    

    const formatkg = value => value + ' kg'
 

    return (
      <div className='slider custom-labels'>
        <Slider
          min={0}
          max={100}
          step={1}
          value={horizontal}
          labels={horizontalLabels}
          orientation="horizontal"
          onChange={this.handleChangeHorizontal}
        />
        <div className='value'>{formatkg(horizontal)}</div>
        <hr />
       
      </div>
    )
  }
}

export default HorizontalCustomLabels
import React, { Component } from 'react'
import '../assets/styles/TypeSel.css'
import { Link } from 'react-router-dom'



class TypeSel extends Component {

  constructor() {

    super()

    this.state = {

      redirect: false

    }
  }
  
  render() {

    return (

      <div
        id='TypeSelContOut'>


        
        

            <img
              id='PerciImg' 
              alt='Plus'
              src={require('../assets/images/perci.png')} />

  

        


        <p 
          id='TypeSelTitle'> 
          User Selection
        </p>
        
        <div
          id='TypeSelBtnCont'>

          <div
            id='SelRadioCont'>

            <div>

              <Link
                to={'/instLogin/'}>
        
                <div
                  id='TypeSelInstBtn'
                  className='bluBtnGen'>
                  Instructor
                </div>
                
              </Link>
      
            </div>

            <div>

              <Link
                to={'/studLogIn/'}>
        
                <div
                  id='TypeSelStudBtn'
                  className='bluBtnGen'>
                  Student
                </div>
                
              </Link>
          
            </div>

          </div>

        </div>

      </div>

      

    )
  }
}


export default TypeSel




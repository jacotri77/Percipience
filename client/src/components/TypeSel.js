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
        id='TypeSelCont'>

        <div
          className='aniDiv'>
        </div>

        <h1 
          id='TypeSelTitle'> 
          User Selection
        </h1>

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




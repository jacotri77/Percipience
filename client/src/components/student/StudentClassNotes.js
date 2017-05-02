import React, { Component } from 'react'
import '../../assets/styles/StudentClassNotes.css'
import {connect} from 'react-redux'


class StudentClassNotes extends Component {


  render() {

    return (
      <div>
       
    	<div 
    		id='classNotesCont'>

       <h2 
        id='classNoteTitle'>

          Class Note Title 

        </h2>

        <div 
          id='notesP'>

        <p>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta voluptatem hic dolorem at perferendis est quo repellat ex ipsum explicabo commodi enim laudantium eligendi minima magni quaerat porro atque, necessitatibus laborum, aliquam ea officia qui. Possimus, voluptatibus cum nam facere!

        </p>

        <p>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, earum? Ratione expedita, earum consequuntur minima, repudiandae impedit, ab ut quidem dolorum perferendis nisi tempora provident odio illum quos dolores consequatur ipsa. Labore, quos, alias. Debitis quis eaque commodi id eum.
          
        </p>

        <p> 

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ex at consequuntur provident doloremque mollitia repellendus dolores deleniti quod sed. Provident ullam, libero aut laboriosam ut aperiam eveniet consectetur eum dolore veniam asperiores culpa impedit debitis, id adipisci quibusdam modi.

        </p>

        </div>

        <div 
          id='bottomButtons'>

        <button 
          id='textEdit'>

          Edit this Text

        </button>

        <button 
          id='noteAdd'>

          <img 
            src={require('../../assets/images/plus.png')} />

        </button>

        </div>

        </div>

        </div>
    	)

    }
    
}

const mapStateToProps = function(appState) {
  return {
    messages: appState.messages
  }
}

export default connect(mapStateToProps)(StudentClassNotes)

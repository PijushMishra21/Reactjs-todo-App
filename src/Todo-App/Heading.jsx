import {React} from 'react'
import gifImage from '../media/icons8-choice.gif';             

function Heading() {

  return (
    <div className='heading_div'>
     <h1 className='heading'>To-Do-App</h1>
     <img className='todo_gif' src={gifImage} alt="Animated GIF" />

    </div>
  )
}

export default Heading;      
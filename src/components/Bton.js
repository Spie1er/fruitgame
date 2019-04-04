import React from 'react';
import {randomNumber} from './Question';
import swal from '@sweetalert/with-react'
import think from '../media/think.png';
import smile from '../media/smile.png';

const showAlert = () => { 
   if (document.querySelectorAll('input:checked').length === randomNumber) 
   {
    swal(
        <div>
          <img  src={smile} alt={smile}/>
          <p>You Are a little Genius</p>
        </div>
      ).then(function(){ 
       window.location.reload(true);
       }
    );

    }

  else {
    swal(
        <div>
          <img  src={think} alt={think}/>
          <p>Think more before trying</p>
        </div>
      ).then(function(){ 
       window.location.reload(true);
       }
    );
     }

}


const Bton = () => {


    return (
        <div>
            <button onClick={showAlert} type='button' className='nodeco'>

                <div className='f3 tc dim  white w-15 rm2 ma2 bw1 shadow-3 br3 bt1'>
                        <h2>CHECK</h2>
                        
                </div> 
                
            </button>


        </div>
    )

}

export default Bton;
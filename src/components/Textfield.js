import React from 'react';
import {randomNumber} from './Question'



const Textfield = () => {

    return (
        
        <div className='f3 tc  w-15 rm2 ma2 bw1 shadow-3 specviz spcOrange'>
                <h2>Eat {randomNumber} Apples and press CHECK</h2>
        </div>       
       
    )

}

export default Textfield;
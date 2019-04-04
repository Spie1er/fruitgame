import React, {Component} from 'react';
import Question from '../components/Question';
import Bton from '../components/Bton';
import Apples from '../components/Apples';
import Textfield from '../components/Textfield';
import './App.css';




class App extends Component {
    
   render() {

        return (
            <div>
                <h1 className='white b f1 f-headline-ns tc db mb3 mb4-ns'>Fruit Game</h1>
                <hr></hr>
                <div className='bigDiv '>
                    <div className='flex flex-wrap wrp1'> 
                        <Question /> 
                        <Bton /> 
                    </div>
                    <div className='flex flex-wrap wrp1'> 
                        <Apples />
                        <Textfield />
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

// 
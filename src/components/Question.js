import React from 'react';
import './component.css';


const qlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const rNum = (randomArray) => randomArray[Math.floor(Math.random() * randomArray.length)];

const randomNumber = rNum(qlist);



const Question = () => {
    
    return (

        <div className='f3 tc white  w-25 rm2 ma2 bw1 shadow-3 specviz'>
            <h2>Eat <span className='spcRED'> {randomNumber} </span> Apple(s)</h2>
        </div>


    )
}


export default Question;
export  {randomNumber};
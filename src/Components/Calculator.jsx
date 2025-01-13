import React from 'react'
import Navbar from './Navbar'
import  { useState } from 'react';

const Calculator = () => {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  // Handle button clicks
  const handleButtonClick = (value) => {
    setInput(input + value);
    
    
  };

  // Handle clear button
  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  // Handle equals button to calculate the result
  const handleEquals = () => {
    try {
     
      setOutput(eval(input).toString());
      
    } catch (error) {
      setOutput('Error');
    }
  };

  // Handle backspace button
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
   <>
    <Navbar/>
    
    <div className='calsection'>
    <h3>Calculator</h3>
      
      <div className="calculator">
        <div className="display">
        
        <div className="result">{input}Result{output}</div>
        </div>
        <div className="buttons">

        <div className="digit" onClick={() => handleButtonClick('1')}>1</div>
        <div className="digit" onClick={() => handleButtonClick('2')}>2</div>
        <div className="digit" onClick={() => handleButtonClick('3')}>3</div>

        <div className="digit" onClick={() => handleButtonClick('4')}>4</div>
        <div className="digit" onClick={() => handleButtonClick('5')}>5</div>
        <div className="digit" onClick={() => handleButtonClick('6')}>6</div>
          
        <div className="digit" onClick={() => handleButtonClick('7')}>7</div>
        <div className="digit" onClick={() => handleButtonClick('8')}>8</div>
        <div className="digit" onClick={() => handleButtonClick('9')}>9</div>
        <div className="digit" onClick={() => handleButtonClick('0')}>0</div>
        

        
        <div className="digit" onClick={() => handleButtonClick('*')}>*</div>
        <div className="digit"  onClick={() => handleButtonClick('-')}>-</div>
        <div className="digit" onClick={() => handleButtonClick('.')}>.</div>
        <div className="digit" onClick={handleEquals}>=</div>
        <div className="digit" onClick={() => handleButtonClick('+')}>+</div>

        <div className="digit" onClick={handleClear}>C</div>
        <div className="digit" onClick={handleBackspace}>←</div>
        <div className="digit" onClick={() => handleButtonClick('/')}>/</div>

        </div>
      </div>

     </div>
   </>
  )
}

export default Calculator

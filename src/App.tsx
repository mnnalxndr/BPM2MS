import React, { useState } from 'react';
import './App.css';
import InputPane from './InputPane';
import { InputValues } from './InputValues';
import { InputType } from './inputType';
import CalculationsPane from './CalculationsPane';

function App() {
  const [ inputValue, setInputValue ] = useState(120);
  const [ inputType , setInputType ] = useState<InputType>(InputType.BPM);
  return (
    <div className="App">
      <h2>BPM {'<->'} MS Converter</h2>
      <InputPane 
        inputType={inputType}
        setInputType={setInputType}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <CalculationsPane
        inputType={inputType}
        inputValue={inputValue}  
      />
    </div>
  );
}

export default App;

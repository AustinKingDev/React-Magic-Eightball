import EightBall from './Components/EightBall';
import Input from './Components/Input';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = ({ target }) => {
    var newInput = target.value;
    console.log(newInput)
    setUserInput(newInput)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    fetch(`https://8ball.delegator.com/magic/JSON/${userInput}`)
      .then(res => res.json())
      .then((result) => {
        setResponse(result)
      })
  }

  return (
    <div className="App">
      <Input
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <EightBall response={response} />  
    </div>
  );
}

export default App;

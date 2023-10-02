import React, { useEffect, useState } from 'react';
import first from './images/first.jpg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    const formattedMessage = message.toLocaleLowerCase().replace(/\s+/g, '');
    setMessage(formattedMessage);
  }, [message]);

  const handleClick = () => {
    console.log('Input Value:', message);
    const desiredWord = 'khaled';
    if(message.includes(desiredWord)){
      console.log("Done");
    }
    else{
      console.log("lsa");
    }

  };

  return (
    <div className="App">
      <div className="imgdiv">
        <img src={first} alt="image" />

        <div className="nputdev">
          <input onChange={handleChange} className="nput" type="text" placeholder="Enter a name" />
          <div className="buttons">
            <button onClick={handleClick} className="button">
              Submit
            </button>
            <button onClick={handleClick} className="button">
              Get
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

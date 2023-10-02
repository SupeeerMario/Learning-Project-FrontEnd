import React, { useEffect, useState } from 'react';
import './App.css';

import first from './images/first.jpg';
import sec from './images/sec.JPG';
import third from './images/third.jpg';
import forth from './images/forth.jpg';


const imagelst = [first,sec,third,forth];

function App() {
  const [message, setMessage] = useState('');
  const [displayedImage, setDisplayedImage] = useState(null);


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
      const randomIndex = Math.floor(Math.random() * imagelst.length);
      const randomImage = imagelst[randomIndex];
      setDisplayedImage(randomImage);
   

    }
    else{
      console.log("lsa");
    }

  };

  return (
    <div className="App">
      <div className="imgdiv">
      <img src={displayedImage} alt="displayed-image" />



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

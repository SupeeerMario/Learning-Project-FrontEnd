import React, { useEffect, useState } from 'react';
import './App.css';

import first from './images/first.jpg';
import sec from './images/sec.JPG';
import third from './images/third.jpg';
import forth from './images/forth.jpg';

const imagelst = [first, sec, third, forth];

function App() {
  const [message, setMessage] = useState('');
  const [displayedImage, setDisplayedImage] = useState(null);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    const formattedMessage = message.toLowerCase().replace(/\s+/g, '');
    setMessage(formattedMessage);
  }, [message]);

  const handleClick = async () => {
    console.log('Input Value:', message);
    const desiredWord = 'khaled';
    let randomImage;

    if (message.includes(desiredWord)) {
      try {
        const response = await fetch('http://localhost:5000/api/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: message }),
        });

        if (response.ok) {
          console.log('User Created Successfully');
          const randomIndex = Math.floor(Math.random() * imagelst.length);
          randomImage = imagelst[randomIndex];
          setDisplayedImage(randomImage);
        } else {
          console.log('Error occurred while creating user ' + response.status);
        }
      } catch (error) {
        console.error('Error', error);
      }

      try {
        const formData = new FormData();
        formData.append('images', randomImage);
        
      } catch (error) {
        console.error('Error', error);
      }
    } else {
      console.log('Not included');
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

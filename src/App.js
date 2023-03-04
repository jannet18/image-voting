import React, { useState, useEffect } from 'react';

import './App.css';
import ImageContainer from './components/ImageContainer';

function App() {
  const [images, setImages] = useState([]);

  const restrieveImages = async () => {
    try {
    const response = await fetch('http://localhost:3000/images');
    const imageData = await response.json();
    setImages(imageData);
  }
    catch (error) {
      console.log(error);
    }
  }
// to trigger once we just pass a dependancy
  useEffect(() => {
    restrieveImages();

  },[])

  return (
    <div className="App">
      <h1>Image Voting</h1>
      <div className='image-list'>
        {images.length && images.map(({id, upvotes})=> 
        <ImageContainer key={id} id={id} upvotes={upvotes} onUpvote={restrieveImages} />
        ) }
        
      </div>
    </div>
  );
}

export default App;

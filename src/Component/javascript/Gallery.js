import React, { useState } from 'react';
import '/workspaces/BachpanSchoolProject/src/Component/style/Gallery.css';
import 'bootstrap/dist/css/bootstrap.css';

const Gallery = () => {
 
    const [show2024Images, setShow2024Images] = useState(false);
    const [show2023Images, setShow2023Images] = useState(false);
    const [show2022Images, setShow2022Images] = useState(false);
    const [show2021Images, setShow2021Images] = useState(false);
  
    const handleFilter2024Button = () => setShow2024Images(!show2024Images);
    const handleFilter2023Button = () => setShow2023Images(!show2023Images);
    const handleFilter2022Button = () => setShow2022Images(!show2022Images);
    const handleFilter2021Button = () => setShow2021Images(!show2021Images);
  
    const images2024 = show2024Images ? [
      "https://th.bing.com/th?id=OIP.kkjblmhL8Sw7ukVLOeP6gQAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      "https://th.bing.com/th?id=OIP.kkjblmhL8Sw7ukVLOeP6gQAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      "https://th.bing.com/th?id=OIP.kkjblmhL8Sw7ukVLOeP6gQAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    ] : [];
    const images2023 = show2023Images ? [
      "https://th.bing.com/th?id=OIP.c1lTPaHvsrGuF8mKXU1vyAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      "https://th.bing.com/th?id=OIP.c1lTPaHvsrGuF8mKXU1vyAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      "https://th.bing.com/th?id=OIP.c1lTPaHvsrGuF8mKXU1vyAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    ] : [];
    const images2022 = show2022Images ? [
      "https://th.bing.com/th?id=OIP.bHc6pTJHLG6gqhBOpIH4vwHaFo&w=286&h=217&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      "https://th.bing.com/th?id=OIP.bHc6pTJHLG6gqhBOpIH4vwHaFo&w=286&h=217&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      "https://th.bing.com/th?id=OIP.bHc6pTJHLG6gqhBOpIH4vwHaFo&w=286&h=217&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    ] : [];
  
    const renderImages = (images) => {
      return images.map((image, index) => (
        <img key={index} src={image}  alt={`Gallery Image ${index + 1}`} />
      ));
    };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 rightbar">
          <h2>Years of festival</h2>
          <button onClick={handleFilter2024Button}>
            {show2024Images ? 'Hide Marriage Images' : 'Show Marriage Images'}
          </button>
          <button onClick={handleFilter2023Button}>
            {show2023Images ? 'Hide Event Images' : 'Show Event Images'}
          </button>
          <button onClick={handleFilter2022Button}>
            {show2022Images ? 'Hide Engagement Images' : 'Show Engagement Images'}
          </button>
          <button onClick={handleFilter2021Button}>
            {show2021Images ? 'Hide Buffet Images' : 'Show Buffet Images'}
          </button>
        </div>
        <div className="col-3 leftbar">
          {renderImages(images2024)}
        </div>
        <div className='col-3 leftbar'>
          {renderImages(images2023)}
        </div>
        <div className='col-3 leftbar'>
          {renderImages(images2022)}
        </div>
      </div>
    </div>
  );
}

export default Gallery;

import React from 'react';
import '/workspaces/BachpanSchoolProject/src/Component/style/Gallery.css';


const Gallery = () => {
     const render=()=>{
        alert("run");
     }
    return (
        <div className='sidebar'>
            <h2>Years of festival</h2>
            <ul>
                <li onClick={render}>2023-2024</li>
                <li>2022-2023</li>
                <li>2021-2022</li>
                <li>2020-2021</li>
            </ul>
        </div>
    )
}

export default Gallery;
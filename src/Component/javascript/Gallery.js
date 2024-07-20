import React from 'react';
import '/workspaces/BachpanSchoolProject/src/Component/style/Gallery.css';
import 'bootstrap/dist/css/bootstrap.css';


const Gallery = () => {
    const render = () => {
        alert("run");
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 rightbar">
                    <h2>Years of festival</h2>
                    <ul>
                        <li onClick={render}>2023-2024</li>
                        <li onClick={render}>2022-2023</li>
                        <li onClick={render}>2021-2022</li>
                        <li onClick={render}>2020-2021</li>
                    </ul>

                </div>
                <div className="col-3 leftbar">

                     
                    <video>
                        <source src='' />
                    </video>
                    <img src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Girl in a jacket" width="100" height="100" />

                </div>
                <div className='col-3 leftbar'>
                    <video>
                        <source src='' />
                    </video>
                    <img src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Girl in a jacket" width="100" height="100" />
                     
                </div>
                <div className='col-3 leftbar'>
                    <video>
                        <source src='' />
                    </video>
                    <img src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Girl in a jacket" width="100" height="100" />
                     
                </div>
            </div>
        </div>
    )
}
export default Gallery;
import React from 'react'


function Gallary(props) {
  const images = props.images;
    return (
      <div className='imageGallary'>
        <div className='fourImages'>
        {images.map((imagePaths, index) => (
                <div className='kanban' key={index}>
                    <img src={imagePaths} alt=""></img>
                </div>
            ))}
        </div>
      </div>
    );
  }

  export default Gallary;
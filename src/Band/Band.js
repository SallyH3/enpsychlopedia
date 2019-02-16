import React from 'react';

const Band = (props) => {
 return (
   <div className="scroll-container">
    <div className="band-container">
      <img className="band-image" src = {props.bandImg} />
      <h2 className="band-name">{props.bandName}</h2>
    </div>
   </div>
 )
}



export default Band;
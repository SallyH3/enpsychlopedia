import React from 'react';
import Bands from '../Bands/Bands';

const Band = (props) => {
 return (
   <div>
     <img src = {props.bandImg} />
     <h2>{props.bandName}</h2>
   </div>
 )
}



export default Band;
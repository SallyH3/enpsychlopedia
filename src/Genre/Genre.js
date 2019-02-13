import React from 'react';
import Bands from '../Bands/Bands.js';
import Controls from '../Controls/Controls.js';

const Genre = (props) => {
  return (
    <section className='genre-container'>
      <div className='genre-title-container'>
        <h1>Genre placeholder</h1>
        <Controls />
      </div>
      <Bands 
      />
    </section>
  )
}

export default Genre;
import React from 'react';
import Bands from '../Bands/Bands.js';
import Controls from '../Controls/Controls.js';

const Genre = (props) => {
  console.log(props)
  return (
    <section className='genre-container'>
      <div className='genre-title-container'>
        <h1>{props.genre.genre}</h1>
        <Controls />
      </div>
      <h1>{props.genreIndex}</h1>
      <Bands 
      />
    </section>
  )
}

export default Genre;
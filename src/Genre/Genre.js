import React from 'react';
import Bands from '../Bands/Bands.js';
import Controls from '../Controls/Controls.js';


const Genre = (props) => {
  // console.log(props)
  let bandsOrganized = props.sortedBands;
  console.log(bandsOrganized)
  if (!bandsOrganized) { 
    return (
      <h1>Hi Sally!</h1>
      )
  }
   return (
    <section className='genre-container'>
      <div className='genre-title-container'>
        <h1>{props.genre.genre}</h1>
        <Controls />
      </div>
      <h1>{props.genreIndex}</h1>
      <Bands genreBands={props.sortedBands}
      />
    </section>
  )
}

export default Genre;
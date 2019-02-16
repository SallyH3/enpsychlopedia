import React, { Component } from 'react';
import Band from '../Band/Band.js';

export default class Bands extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(props)
    return (
      <section className='band-container'>
        {this.props.genreBands.map((band, index) => (
          <Band key={index}
                 bandName={band.name}
                 bandImg={band.image}
          />
        ))}
        <Band />
      </section>
    )
  }
}
import React, { Component } from 'react';
import Band from '../Band/Band.js';

export default class Bands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.all
    }
  }

  render() {
    
    return (
      <section className='bands-wrapper'>
        {this.props.genreBands.map((band, index) => (
          <Band key={index}
                 bandName={band.name}
                 bandImg={band.image}
          />
        ))}
      </section>
    )
  }
}
import React, { Component } from 'react';
import Band from '../Band/Band.js';

export default class Bands extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className='band-container'>
        <button>left</button>
        <Band />
        <button>right</button>
      </section>
    )
  }
}
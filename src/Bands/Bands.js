import React, { Component } from 'react';
import Band from '../Band/Band.js';

export default class Bands extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <div>
          <Band />
        </div>
      </section>
    )
  }
}
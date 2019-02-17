import React, { Component } from 'react';
import Band from '../Band/Band.js';

export default class Bands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: [],
      inactive: []
    }
  }

  assignActiveBands() {
    let activeBands = this.props.genreBands.filter(band => {
        return band.active === true;
      })
    this.setState({active: activeBands})
  }

  assignInactiveBands() {
    let inactiveBands = this.props.genreBands.filter(band => {
        return band.active === false;
      })
    this.setState({inactive: inactiveBands})
  }

  componentWillReceiveProps() {
    this.assignActiveBands();
    this.assignInactiveBands();
  }

  render() { 
  let fallback = this.props.currentSelection;
  if (!fallback) { 
    return (
      <h1>Hi Sally!</h1>
    )
  }
    if(this.props.currentSelection === 'all') {
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
    } else if (this.props.currentSelection === 'active') {
      return (
        <section className='bands-wrapper'>
          {this.state.active.map((band, index) => (
            <Band key={index}
                   bandName={band.name}
                   bandImg={band.image}
            />
          ))}
        </section>
      )
    } else {
      return (
        <section className='bands-wrapper'>
          {this.state.inactive.map((band, index) => (
            <Band key={index}
                   bandName={band.name}
                   bandImg={band.image}
            />
          ))}
        </section>
      )
    }
  }
}
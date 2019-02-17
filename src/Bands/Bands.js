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

  filterAllBands(props) {
    console.log(props)
    return (
      {this.props.genreBands.map((band, index) => (
        <Band key={index}
               bandName={band.name}
               bandImg={band.image}
        />
      ))}
    )
  }

  filterActiveBands() {
    return(
      {this.state.active.map((band, index) => (
        <Band key={index}
                bandName={band.name}
                bandImg={band.image}
            />
          ))}
    )
  }

  filterInactiveBands() {
    return(
      {this.state.inactive.map((band, index) => (
        <Band key={index}
               bandName={band.name}
               bandImg={band.image}
        />
      ))}
    )
  }

  render() { 
  let fallback = this.props.currentSelection;
  if (!fallback) { 
    return (
      <h1>Hi Sally!</h1>
    )
  }
    return (
      <section className='bands-wrapper'>
        if(this.props.currentSelection === 'all') {
          {this.filterAllBands(this.props)}
        } else if (this.props.currentSelection === 'active') {
          {this.filterActiveBands()}
        } else {
          {this.filterInactiveBands()}
        }
      </section>
    )
  }
}
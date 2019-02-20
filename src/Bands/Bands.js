import React, { Component } from 'react';
import Band from '../Band/Band.js';
import Popup from '../Popup/Popup.js';

export default class Bands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: [],
      inactive: [],
      currentPopup: {},
      showPopup: false
    }
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
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

  fetchCurrentBand = (band) => {
    this.setState({currentPopup: band});
    this.togglePopup();
  }

  render() { 
  // let fallback = this.props.currentSelection;
  let currentFilter;
  
  if(this.props.currentSelection === 'all') {
    currentFilter = this.props.genreBands
  } else if (this.props.currentSelection === 'active') {
    currentFilter = this.state.active
  } else {
    currentFilter = this.state.inactive
  }

  return (
    <section className='bands-wrapper'>
      {currentFilter.map((band, index) => (
        <Band 
          key={index}
          band={band}
          fetchBand={this.fetchCurrentBand}
        />
      ))}
      {this.state.showPopup ? 
          <Popup 
            currentBandInfo={this.state.currentPopup} 
            closePopup={this.togglePopup}/>
          : null
        }
    </section>
  )
  }
}
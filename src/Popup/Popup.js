import React, { Component } from 'react';

export default class Popup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  return (
    <div className='popup-container'>
      <img src={this.props.currentBandInfo.image} />
      <h4>{this.props.currentBandInfo.name}</h4>
      <h4>{this.props.currentBandInfo.origin}</h4>
      <h4>{this.props.currentBandInfo.members.map(member => {
        return <h2>{member}</h2>
      })}</h4>
      <h4>{this.props.currentBandInfo.label}</h4>
      <h4>{this.props.currentBandInfo.sideProjects.map(project => {
        return <h2>{project}</h2>
      })}</h4>
      <button className='close-popup' onClick={this.props.closePopup}>X</button>
    </div>
  )
  }
}

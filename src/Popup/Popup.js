import React, { Component } from 'react';

export default class Popup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  return (
    <div className='popup-container'>
      <button className='close-popup' onClick={this.props.closePopup}>X</button>
      <div className='popup-head'>
        <img src={this.props.currentBandInfo.image} />
        <div className='popup-bandname'>
          <h1>{this.props.currentBandInfo.name}</h1>
          <h4>{this.props.currentBandInfo.origin}</h4>
          <h4>Label: &nbsp; {this.props.currentBandInfo.label}</h4>
        </div>  
      </div>
      <div className='popup-info'>
        <h4>Members: &nbsp; {this.props.currentBandInfo.members.map(member => {
          return <p>{member}</p>
        })}</h4>
        <h4>Side Projects: &nbsp; {this.props.currentBandInfo.sideProjects.map(project => {
          return <p>{project}</p>
        })}</h4>
      </div>
    </div>
  )
  }
}

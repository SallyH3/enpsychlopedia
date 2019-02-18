import React from 'react';

const Popup = (props) => {
  console.log(props.currentBandInfo)
  return (
    <div className='popup-container'>
      <img src={props.currentBandInfo.image} />
      <h4>{props.currentBandInfo.name}</h4>
      <h4>{props.currentBandInfo.origin}</h4>
      <h4>{props.currentBandInfo.members.map(member => {
        return <h2>{member}</h2>
      })}</h4>
      <h4>{props.currentBandInfo.label}</h4>
      <h4>{props.currentBandInfo.sideProjects.map(project => {
        return <h2>{project}</h2>
      })}</h4>
    </div>
  )
}

export default Popup;
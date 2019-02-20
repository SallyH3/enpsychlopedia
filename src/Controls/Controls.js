import React, { Component } from 'react';

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

returnAllBands = () => {
  this.props.getActivity('all')
}

returnActiveBands = () => {
  this.props.getActivity('active')
}

returnInactiveBands = () => {
  this.props.getActivity('inactive')
}

  render() {
    return  (
     <div className="filter-btn">
       <button onClick = {this.returnAllBands}>All</button>
       <button onClick = {this.returnActiveBands}>Active</button>
       <button onClick = {this.returnInactiveBands}>Inactive</button>
     </div>
    )
  }
}

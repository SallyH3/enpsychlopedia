import React, { Component } from 'react';
import Bands from '../Bands/Bands.js';
import Controls from '../Controls/Controls.js';

export default class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBands: 'all'
    }
  }
 
  getActivity = activity => {
    this.setState({currentBands: activity})
  }

  render() {
    let bandsOrganized = this.props.sortedBands;
    if (!bandsOrganized) { 
      return (
        <h1>Hi Sally!</h1>
      )
    }

   return (
    <section className='genre-container'>
      <div className='genre-title-container'>
        <h1>{this.props.genre.genre}</h1>
        <div className='characteristics-container'>Characteristics: 
        {this.props.genre.characteristics.map((characteristic, i) => {
          if(i === 0) {
          return <h3 className='characteristic'>{characteristic}</h3>
          } else {
            return <h3 className='characteristic'>, {characteristic}</h3>
            }
          }
        )}
        </div>
        <Controls getActivity={this.getActivity}
        />
      </div>
      <h1>{this.props.genreIndex}</h1>
      <Bands 
        genreBands={this.props.sortedBands}
        currentSelection={this.state.currentBands}
      />
    </section>
  )
  }
}
import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();
  }

  searchBand() {
    
  }

  render() {
    return  (
      <form>
        <input className='search-input' placeholder='Search...' />
        <button className='search-btn' onClick={this.searchBand}>Submit</button>
      </form>
    )
  }
}

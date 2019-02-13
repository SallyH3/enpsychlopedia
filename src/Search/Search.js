import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();
  }

  render() {
    return  (
      <form>
        <input className='search-input' placeholder='Search...' />
        <button className='search-btn'>Submit</button>
      </form>
    )
  }
}

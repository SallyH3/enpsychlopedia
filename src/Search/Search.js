import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();
  }

  render() {
    return  (
      <form>
        <input placeholder='Search...' />
        <button>Submit</button>
      </form>
    )
  }
}

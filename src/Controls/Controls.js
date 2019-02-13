import React, { Component } from 'react';

export default class Controls extends Component {
  constructor() {
    super();
  }

  render() {
    return  (
     <div>
       <button>All</button>
       <button>Active</button>
       <button>Inactive</button>
     </div>
    )
  }
}

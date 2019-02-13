import React, { Component } from 'react';
import '../Styles/App.scss';
import Header from '../Header/Header.js';
import Genre from '../Genre/Genre.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Genre genreId = {1} />
        <Genre genreId = {2} />
        <Genre genreId = {3} />
      </div>
    );
  }
}

export default App;

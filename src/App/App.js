import React, { Component } from 'react';
import '../Styles/Main.scss';
import Header from '../Header/Header.js';
import Genre from '../Genre/Genre.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fetchData: null
      // organizeData: () => {
      //   psychMusic.reduce((arr, genre) => {
      //     arr.push(bands.filter((band) => {
      //       return genre.id === band.genreId;
      //     }))
      //     return acc;
      //   }, []);
      // }
    }
  }
  render() {
    return (
      <div className='app'>
        <Header />
        <Genre genreId = {1} />
        <Genre genreId = {2} />
        <Genre genreId = {3} />
      </div>
    );
  }
}

export default App;

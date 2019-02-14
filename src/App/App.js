import React, { Component } from 'react';
import '../Styles/Main.scss';
import Header from '../Header/Header.js';
import Genre from '../Genre/Genre.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
      bands: []
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

  componentDidMount() {
    fetch('http://whateverly-datasets.herokuapp.com/api/v1/psychMusic')
      .then(psychMusic => psychMusic.json())
      .then(music => this.setState({ genres: music }))
      .catch(err => console.log('music error', err))
    fetch('http://whateverly-datasets.herokuapp.com/api/v1/bands')
    .then(bands => bands.json())
    .then(band => this.setState({ bands: band }))
    .catch(err => console.log('band error', err))
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

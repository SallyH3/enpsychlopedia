import React, { Component } from 'react';
import '../Styles/Main.scss';
import Header from '../Header/Header.js';
import Genre from '../Genre/Genre.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
      bands: [],
      bandsById: null
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

   organizeData() {
    let data = this.state.genres.reduce((arr, genre) => {
        arr.push(this.state.bands.filter((band) => {
          return genre.id == band.genreId;
        }))
        return arr;
      }, []);
    // console.log(data)
    this.setState({ 
      bandsById: data
    })
  }

  componentDidMount() {
    fetch('http://whateverly-datasets.herokuapp.com/api/v1/psychMusic')
      .then(response => response.json())
      .then(music => this.setState({ genres: music.psychMusic }))
      .then(console.log(this.state.genres))
      .catch(err => console.log('music error', err))
    fetch('http://whateverly-datasets.herokuapp.com/api/v1/bands')
      .then(response => response.json())
      .then(band => this.setState({ bands: band.bands, travis: this.organizeData() }))
      // .then(this.organizeData())
      .catch(err => console.log('band error', err))
  }

  render() {
    console.log(this.state);
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

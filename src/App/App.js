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
      bandsById: []
    }
  }

   organizeData = () =>  {
    let data = this.state.genres.reduce((arr, genre) => {
        arr.push(this.state.bands.filter((band) => {
          return genre.id === band.genreId;
        }))
        return arr;
      }, []); 
      console.log(data)
    this.setState({ 
      bandsById: data
    })
  }

  componentDidMount() {
    fetch('http://whateverly-datasets.herokuapp.com/api/v1/psychMusic')
      .then(response => response.json())
      .then(music => this.setState({ genres: music.psychMusic }))
      .then(() => {this.organizeData()})
      .catch(err => console.log('music error', err))
    fetch('http://whateverly-datasets.herokuapp.com/api/v1/bands')
      .then(response => response.json())
      .then(band => this.setState({ bands: band.bands }))
      .then(() => {this.organizeData()})
      .catch(err => console.log('band error', err))
  }

  render() {
    return (
      <div className='app'>
        <Header />
        {this.state.genres.map((genre, index) => (
          <Genre key={index}
                 genre={genre}
                 sortedBands={this.state.bandsById[index]}
          />
        ))}
      </div>
    );
  }
}

export default App;

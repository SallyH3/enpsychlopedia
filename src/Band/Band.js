import React, {Component} from 'react';

export default class Band extends Component {
  constructor(props) {
    super(props)
  }

  sendBandData = () => {
    this.props.fetchBand(this.props.band);
  }

  render() {
    return (
      <div className='scroll-container'>
        <div onClick={this.sendBandData} style={{backgroundImage: `url(${this.props.band.image})`}} className="band-container">
          <h2 className='band-name'>{this.props.band.name}</h2>
          <div className='overlay'></div>
        </div>
      </div>
    )
  }
}
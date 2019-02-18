import React, {Component} from 'react';

export default class Band extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thisBand: this.props.band
    }
  }

  sendBandData = () => {
    this.props.fetchBand(this.state.thisBand);
  }

  render() {
    return (
      <div className="scroll-container">
       <div onClick={this.sendBandData} className="band-container">
         <img className="band-image" src = {this.props.bandImg} />
         <h2 className="band-name">{this.props.bandName}</h2>
       </div>
      </div>
    )
  }
}

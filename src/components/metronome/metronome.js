import React, { Component } from 'react';
import Metronome from "./metronome/metronome";

export default class Metronome extends Component {
  constructor(props) {
      super(props)

      this.state = {

      }
      this.handleBpmChange = this.handleBpmChange.bind(this);
  }
  handleBpmChange = event => {
      const bpm = event.target.value;
  } 
  
  
    render() {
        this.state = {
            playing: false,
            count: 0,
            bpm: 100,
            beatsPerMeasure: 4
        };

    return (
      <div className='metronome'>
        <div className= "bpm-slider">
            <div>{this.state.bpm} BPM</div>
            <input type="range" min="60" max="200" value={this.state.bpm} />
        </div>
        <h2>React Redux Router</h2>
      </div>
    );
  }
}

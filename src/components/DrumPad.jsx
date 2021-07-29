import React, { Component } from 'react';
import { DrumPadStyled } from './styled-components/DrumPad';

class DrumPad extends Component {
  playing = () => {
    const audio = document.getElementById(this.props.letter);
    audio.play();
    this.props.setState({ displayText: this.props.id });
  };

  handleClick = () => {
    this.playing();
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (e) => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.playing();
    }
  };

  render() {
    return (
      <DrumPadStyled
        className='drum-pad clip'
        id={`${this.props.id}-container`}
        onClick={this.handleClick}
      >
        <span>{this.props.letter}</span>
        <audio
          src={this.props.url}
          className='audio-item clip'
          id={this.props.letter}
        ></audio>
      </DrumPadStyled>
    );
  }
}

export default DrumPad;

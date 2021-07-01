import React, { Component } from "react";
import { DrumPadStyled } from "./styled-components/DrumPad";

class DrumPad extends Component {
  handleClick = () => {
    const audio = document.getElementById(this.props.id);
    audio.play();
    this.props.setState({ displayText: this.props.id });
  };

  render() {
    return (
      <DrumPadStyled className="drum-pad" onClick={this.handleClick}>
        <span>{this.props.letter}</span>
        <audio src={this.props.url} className="audio-item" id={this.props.id}></audio>
      </DrumPadStyled>
    );
  }
}

export default DrumPad;

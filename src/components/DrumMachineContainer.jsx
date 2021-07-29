import React, { Component } from 'react';
import {
  MainContainer,
  Display,
  DrumPadsContainer,
} from './styled-components/DrumMachineContainer';
import DrumPad from './DrumPad';
import { data } from '../data';

class DrumMachineContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: '-----',
    };
  }

  render() {
    return (
      <MainContainer>
        <Display id='display'>{this.state.displayText}</Display>
        <DrumPadsContainer>
          {data.map((element) => (
            <DrumPad
              id={element.id}
              letter={element.letter}
              key={element.id}
              url={element.url}
              ref={(ref) => (this.child = ref)}
              setState={(state) => this.setState(state)}
            />
          ))}
        </DrumPadsContainer>
      </MainContainer>
    );
  }
}

export default DrumMachineContainer;

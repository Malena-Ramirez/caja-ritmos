import React from "react";
import { MainContainer, Display } from "./styled-components/DrumMachineContainer";

const DrumMachineContainer = () => {
  return (
    <MainContainer>
      <Display id="display">
        <span>Display</span>
      </Display>
      <div id="drum-pads-container">Sonidos</div>
    </MainContainer>
  );
};

export default DrumMachineContainer;

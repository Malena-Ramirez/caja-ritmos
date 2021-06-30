import React from "react";
import { MainContainer, Display, DrumPadsContainer } from "./styled-components/DrumMachineContainer";
import DrumPad from "./DrumPad";

const DrumMachineContainer = () => {
  return (
    <MainContainer>
      <Display id="display">
        <span>Display</span>
      </Display>
      <DrumPadsContainer>
        <DrumPad />
      </DrumPadsContainer>
    </MainContainer>
  );
};

export default DrumMachineContainer;

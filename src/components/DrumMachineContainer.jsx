import React from "react";
import { MainContainer, Display, DrumPadsContainer } from "./styled-components/DrumMachineContainer";
import DrumPad from "./DrumPad";
import { data } from "../data";

const DrumMachineContainer = () => {
  return (
    <MainContainer>
      <Display id="display">
        <span>Display</span>
      </Display>
      <DrumPadsContainer>
        {data.map((element) => (
          <DrumPad id={element.id} letter={element.letter} key={element.id} />
        ))}
      </DrumPadsContainer>
    </MainContainer>
  );
};

export default DrumMachineContainer;

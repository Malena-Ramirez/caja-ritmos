import React from "react";
import { DrumPadStyled } from "./styled-components/DrumPad";

const DrumPad = ({ id, letter }) => {
  return (
    <DrumPadStyled className="drum-pad" id={id}>
      <span>{letter}</span>
    </DrumPadStyled>
  );
};

export default DrumPad;

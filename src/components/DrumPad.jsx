import React from "react";
import { DrumPadStyled } from "./styled-components/DrumPad";

const DrumPad = () => {
  return (
    <>
      <DrumPadStyled className="drum-pad">
        <span>Q</span>
      </DrumPadStyled>
      <DrumPadStyled className="drum-pad">
        <span>w</span>
      </DrumPadStyled>
      <DrumPadStyled className="drum-pad">
        <span>E</span>
      </DrumPadStyled>
      <DrumPadStyled className="drum-pad">
        <span>A</span>
      </DrumPadStyled>
      <DrumPadStyled className="drum-pad">
        <span>S</span>
      </DrumPadStyled>
      <DrumPadStyled className="drum-pad">
        <span>D</span>
      </DrumPadStyled>
      <DrumPadStyled className="drum-pad">
        <span>Z</span>
      </DrumPadStyled>
      <DrumPadStyled className="drum-pad">
        <span>X</span>
      </DrumPadStyled>
      <DrumPadStyled className="drum-pad">
        <span>C</span>
      </DrumPadStyled>
    </>
  );
};

export default DrumPad;

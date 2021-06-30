import React from 'react';
import { GlobalStyle, AppDiv, Title } from './components/styled-components/AppStyled';
import DrumMachineContainer from './components/DrumMachineContainer';



function App() {
  return (
    <AppDiv id="drum-machine">
      <GlobalStyle />
      <Title>Caja de ritmos</Title>
      <DrumMachineContainer />
    </AppDiv>
  );
}

export default App;

import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  position:fixed;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  font-family: 'Indie Flower', cursive;
}
`
export const AppDiv = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0c0b10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly; 
`

const glow = keyframes`
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
`

export const Title = styled.h1`
  margin-top: 0;
  font-size: 2rem;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  @media (min-width: 460px) {
    font-size: 2.5rem;
    -webkit-animation: ${glow} 1s ease-in-out infinite alternate;
    -moz-animation: ${glow} 1s ease-in-out infinite alternate;
    animation: ${glow} 1s ease-in-out infinite alternate;
  }
`
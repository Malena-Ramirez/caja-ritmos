import styled from "styled-components";

export const MainContainer = styled.div`
  width: 70vh;
  height: 70vh;
  background-color: #1b1824;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  -webkit-box-shadow: 0px 0px 50px 0px rgba(230,0,115,0.5); 
  box-shadow: 0px 0px 50px 0px rgba(230,0,115,0.5);
`

export const Display = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 40px;
  background-color: #f6f44b;
  -webkit-box-shadow: 0px 0px 50px 0px rgba(224,217,109,0.4), inset 0px 0px 50px 10px rgba(11,11,5,0.8); 
  box-shadow: 0px 0px 50px 0px rgba(224,217,109,0.4), inset 0px 0px 50px 10px rgba(11,11,5,0.8) ;
`
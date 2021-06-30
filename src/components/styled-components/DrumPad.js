import styled from "styled-components";

export const DrumPadStyled = styled.div`
width: 95px;
height: 95px;
border-radius: 50%;
background-color: #0c0b10;
cursor: pointer;
border: 3px solid #342f45;
color: white;
font-size: 1.5rem;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
&:hover{
  background-color: #342f45;
}&:active{
  transform: translateY(8px);
  background-color: #282334;
  -webkit-box-shadow: 0px 0px 30px 1px rgba(101,254,255,0.4); 
  box-shadow: 0px 0px 30px 1px rgba(101,254,255,0.4);
}
`
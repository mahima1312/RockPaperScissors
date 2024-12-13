import styled from 'styled-components'

export const Appcontainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  padding: 30px;`

export const GameViewContainer = styled.div`
 width:100%;
 height:60vh;
 display:flex;
 justify-content:center;
 align-items:center;
 `

export const GameOptionsList = styled.ul`list-style-type:none;
  padding-left:0px;
  display:flex;
  margin-left:0px;
  flex-wrap:wrap;
  max-width:600px;
  justify-content:center;
  align-items:center;
  `

export const ResultGameViewContainer = styled.div`
height:60vh;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;`

export const SelectChoiceContainer = styled.div`
width:40vw;
display:flex;
justify-content:space-between;
align-items:center`

export const ResultContainer = styled.div`display:flex;
  flex-direction:column;
  align-items:center;`

export const PlayerText = styled.h1`
 color:#ffffff;
 font-size:25px;
  font-weight:bold;`

export const Image = styled.img`width:180px;
   height:180px;`

export const WinLoseContianer = styled.div`display:flex;
  flex-direction:column;
 justify-content:center;
 align-items:center;`

export const WinLoseText = styled.p`color:#ffffff;
  font-weight:bold;
  font-size:30px;`

export const PlayAgainButton = styled.button`background-color: #ffffff;
  font-family:Bree Serif;
  height:40px;
  width:180px;
  border-radius:8px;
  font-size:20px;
  border:none;
  outline:none;
  cursor:pointer;
  color:#223a5f;
  `

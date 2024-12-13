import styled from 'styled-components'

export const ScoreBoardContainer = styled.div`display: flex;
  justify-content: center;`

export const DisplayScoreBoard = styled.div`width: 70%;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;`

export const GameNamesContainer = styled.div`
 display:flex;
 flex-direction:column;`

export const Name = styled.h1`color: #ffffff;
  font-family: Bree Serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;`

export const DisplayScoreContainer = styled.div`background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  border-radius: 10px;`

export const ScoreText = styled.p`color: #223a5f;
  font-family: Bree Serif;
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;`

export const Score = styled.p`color: #223a5f;
  font-family: Roboto;
  font-size: 40px;
  margin-top: 5px;
  font-weight:bold;
  margin-bottom: 5px;`

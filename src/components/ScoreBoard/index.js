import {
  ScoreBoardContainer,
  DisplayScoreBoard,
  GameNamesContainer,
  Name,
  DisplayScoreContainer,
  ScoreText,
  Score,
} from './StyledComponents'

const ScoreBoard = props => {
  const {score} = props
  return (
    <ScoreBoardContainer>
      <DisplayScoreBoard>
        <GameNamesContainer>
          <Name>
            ROCK <br />
            PAPER <br />
            SCISSORS
          </Name>
        </GameNamesContainer>
        <DisplayScoreContainer>
          <ScoreText>Score</ScoreText>
          <Score>{score}</Score>
        </DisplayScoreContainer>
      </DisplayScoreBoard>
    </ScoreBoardContainer>
  )
}
export default ScoreBoard

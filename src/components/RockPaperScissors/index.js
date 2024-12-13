import {Component} from 'react'

import Rules from '../Rules'
import ScoreBoard from '../ScoreBoard'
import GameOptions from '../GameOptions'

import {
  Appcontainer,
  GameOptionsList,
  GameViewContainer,
  ResultGameViewContainer,
  SelectChoiceContainer,
  PlayerText,
  Image,
  ResultContainer,
  PlayAgainButton,
  WinLoseText,
  WinLoseContianer,
} from './StyledComponents'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lost: 'LOST',
  draw: 'DRAW',
}

class RockPaperScissors extends Component {
  state = {
    score: 0,
    userChoice: '',
    gameChoice: '',
    gameStatus: gameStatusConstants.inProgress,
  }

  onClickSetGame = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  onClickSetUserChoice = id => {
    this.setState(
      {userChoice: id, gameChoice: this.getGameChoice()},
      this.evaluteGame,
    )
  }

  getGameChoice = () => {
    const {choicesList} = this.props
    const gameChoiceList = choicesList.map(choice => choice.id)
    const randomIndex = Math.floor(Math.random() * 3)
    return gameChoiceList[randomIndex]
  }

  evaluteGame = () => {
    const {userChoice, gameChoice} = this.state
    if (userChoice === gameChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else if (userChoice === 'ROCK') {
      if (gameChoice === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.lost,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (gameChoice === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.lost,
        }))
      }
    } else if (userChoice === 'PAPER') {
      if (gameChoice === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.lost,
        }))
      }
    }
  }

  renderOptionsView = () => {
    const {choicesList} = this.props

    return (
      <GameOptionsList>
        {choicesList.map(eachOption => (
          <GameOptions
            onClickSetUserChoice={this.onClickSetUserChoice}
            key={eachOption.id}
            option={eachOption}
          />
        ))}
      </GameOptionsList>
    )
  }

  renderWinView = () => {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props
    const userImage = choicesList.filter(choice => choice.id === userChoice)
    const gameImage = choicesList.filter(choice => choice.id === gameChoice)

    return (
      <ResultGameViewContainer>
        <SelectChoiceContainer>
          <ResultContainer>
            <PlayerText>YOU</PlayerText>
            <Image src={userImage[0].imageUrl} alt="your choice" />
          </ResultContainer>
          <ResultContainer>
            <PlayerText>OPPONENT</PlayerText>
            <Image src={gameImage[0].imageUrl} alt="opponent choice" />
          </ResultContainer>
        </SelectChoiceContainer>
        <WinLoseContianer>
          <WinLoseText>YOU WON</WinLoseText>
          <PlayAgainButton type="button" onClick={this.onClickSetGame}>
            Play Again
          </PlayAgainButton>
        </WinLoseContianer>
      </ResultGameViewContainer>
    )
  }

  renderLostView = () => {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props
    const userImage = choicesList.filter(choice => choice.id === userChoice)
    const gameImage = choicesList.filter(choice => choice.id === gameChoice)

    return (
      <ResultGameViewContainer>
        <SelectChoiceContainer>
          <ResultContainer>
            <PlayerText>YOU</PlayerText>
            <Image src={userImage[0].imageUrl} alt="your choice" />
          </ResultContainer>
          <ResultContainer>
            <PlayerText>OPPONENT</PlayerText>
            <Image src={gameImage[0].imageUrl} alt="opponent choice" />
          </ResultContainer>
        </SelectChoiceContainer>
        <WinLoseContianer>
          <WinLoseText>YOU LOSE</WinLoseText>
          <PlayAgainButton type="button" onClick={this.onClickSetGame}>
            Play Again
          </PlayAgainButton>
        </WinLoseContianer>
      </ResultGameViewContainer>
    )
  }

  renderDrawView = () => {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props
    const userImage = choicesList.filter(choice => choice.id === userChoice)
    const gameImage = choicesList.filter(choice => choice.id === gameChoice)

    return (
      <ResultGameViewContainer>
        <SelectChoiceContainer>
          <ResultContainer>
            <PlayerText>YOU</PlayerText>
            <Image src={userImage[0].imageUrl} alt="your choice" />
          </ResultContainer>
          <ResultContainer>
            <PlayerText>OPPONENT</PlayerText>
            <Image src={gameImage[0].imageUrl} alt="opponent choice" />
          </ResultContainer>
        </SelectChoiceContainer>
        <WinLoseContianer>
          <WinLoseText>IT IS DRAW</WinLoseText>
          <PlayAgainButton type="button" onClick={this.onClickSetGame}>
            Play Again
          </PlayAgainButton>
        </WinLoseContianer>
      </ResultGameViewContainer>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state

    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderOptionsView()
      case gameStatusConstants.win:
        return this.renderWinView()
      case gameStatusConstants.lost:
        return this.renderLostView()
      case gameStatusConstants.draw:
        return this.renderDrawView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state

    return (
      <Appcontainer>
        <ScoreBoard score={score} />
        <GameViewContainer>{this.renderGameView()}</GameViewContainer>
        <Rules />
      </Appcontainer>
    )
  }
}

export default RockPaperScissors

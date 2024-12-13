import {GameOption, Image, ImgBtn} from './StyledComponents'

const GameOptions = props => {
  const {option, onClickSetUserChoice} = props
  const {id, imageUrl} = option
  const userChoice = () => {
    onClickSetUserChoice(id)
  }
  return (
    <GameOption>
      <ImgBtn
        onClick={userChoice}
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
      >
        <Image src={imageUrl} alt={id} />
      </ImgBtn>
    </GameOption>
  )
}

export default GameOptions

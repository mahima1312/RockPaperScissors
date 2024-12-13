import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  RuleBtnContainer,
  RuleBtn,
  RuleImage,
  ModalContainer,
  CloseBtn,
  ImageContainer,
} from './StyledComponents'

const Rules = () => (
  <RuleBtnContainer>
    <Popup modal trigger={<RuleBtn>Rules</RuleBtn>}>
      {close => (
        <ModalContainer>
          <CloseBtn onClick={() => close()}>
            <RiCloseLine size={30} />
          </CloseBtn>
          <ImageContainer>
            <RuleImage
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </ImageContainer>
        </ModalContainer>
      )}
    </Popup>
  </RuleBtnContainer>
)

export default Rules

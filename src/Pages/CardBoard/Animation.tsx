import {
  AnimationContainer,
  OverlappingAnimation,
  ButtonContainer,
  ResetButton,
} from './CardBoard.styled'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

interface AnimationProps {
  animations: { src: string; loop: boolean; autoplay: boolean }[]
  isVisible: boolean
  resetGame: () => void
}

const Animation = ({ animations, isVisible, resetGame }: AnimationProps) => (
  <AnimationContainer isVisible={isVisible}>
    {animations.map((animation, index) => (
      <OverlappingAnimation key={index}>
        <DotLottieReact
          src={animation.src}
          loop={animation.loop}
          autoplay={animation.autoplay}
        />
      </OverlappingAnimation>
    ))}
    <ButtonContainer>
      <ResetButton onClick={resetGame}>Reset game</ResetButton>
    </ButtonContainer>
  </AnimationContainer>
)

export default Animation

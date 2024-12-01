import {
  CardContainer,
  CardInner,
  CardFront,
  CardBack,
  StyledCard,
} from './CardBoard.styled'

interface CardProps {
  card: {
    id: number
    src: string
    alt: string
    visible: boolean
  }
  index: number
  cardBack: string
  handleCardClick: (index: number) => void
}

const Card = ({ card, index, cardBack, handleCardClick }: CardProps) => (
  <CardContainer key={card.id} onClick={() => handleCardClick(index)}>
    <CardInner isFlipped={card.visible}>
      <CardFront>
        <StyledCard src={card.src} alt={card.alt} />
      </CardFront>
      <CardBack cardBack={cardBack} />
    </CardInner>
  </CardContainer>
)

export default Card

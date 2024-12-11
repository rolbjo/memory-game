import { BoardGrid, Header } from './CardBoard.styled'

import { useParams } from 'react-router-dom'

import BackButton from '../../components/BackButton'
import useMemorySet from './useMemorySet'
import useGameLogic from './useGameLogic'
import Card from './Card'
import Animation from './Animation'

const CardBoard = () => {
  const { setId } = useParams<{ setId: string }>()
  const {
    shuffledCards,
    setShuffledCards,
    animations,
    cardBack,
    headerStyle,
    sound,
    isLoading,
  } = useMemorySet(setId || '')
  const {
    resetGame,
    handleCardClick,
    audioRef,
    flipSoundRef,
    flipBackSoundRef,
  } = useGameLogic(shuffledCards, setShuffledCards, sound, isLoading)

  if (isLoading) {
    return <div style={{ backgroundColor: 'white', height: '100vh' }}></div>
  }

  return (
    <>
      <BackButton />
      {headerStyle && (
        <Header style={{ color: headerStyle }}>{setId} memory</Header>
      )}
      <Animation
        animations={animations}
        isVisible={
          shuffledCards.length > 0 &&
          shuffledCards.every((card) => card.visible)
        }
        resetGame={resetGame}
      />

      <BoardGrid>
        {shuffledCards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            cardBack={cardBack}
            handleCardClick={handleCardClick}
          />
        ))}
      </BoardGrid>

      <audio ref={audioRef} preload='auto' />
      <audio ref={flipSoundRef} src='card-sound.ogg' preload='auto' />
      <audio ref={flipBackSoundRef} src='flip-back-sound.wav' preload='auto' />
    </>
  )
}
export default CardBoard

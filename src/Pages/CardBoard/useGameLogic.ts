import { useEffect, useRef, useState } from 'react'
import shuffleArray from '../../utils/shuffleArray'
import { Card } from '../../components/data/cardsData'

const useGameLogic = (
  shuffledCards: Card[],
  setShuffledCards: (cards: Card[]) => void,
  sound: string,
  isLoading: boolean
) => {
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [isAudioReady, setIsAudioReady] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)

  const resetGame = () => {
    if (shuffledCards.length > 0) {
      const resetCards = shuffleArray(shuffledCards).map((card) => ({
        ...card,
        visible: false,
      }))
      setShuffledCards(resetCards)
      setFlippedCards([])
    }
  }

  const handleCardClick = (index: number) => {
    if (flippedCards.length < 2 && !shuffledCards[index].visible) {
      const newShuffledCards = [...shuffledCards]
      newShuffledCards[index].visible = true
      setShuffledCards(newShuffledCards)
      setFlippedCards([...flippedCards, index])
    }
  }

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [index1, index2] = flippedCards
      if (shuffledCards[index1].src === shuffledCards[index2].src) {
        setFlippedCards([])
      } else {
        const timer = setTimeout(() => {
          const newShuffledCards = [...shuffledCards]
          newShuffledCards[index1].visible = false
          newShuffledCards[index2].visible = false
          setShuffledCards(newShuffledCards)
          setFlippedCards([])
        }, 1500)

        return () => clearTimeout(timer)
      }
    }
  }, [flippedCards, shuffledCards])

  useEffect(() => {
    if (!isLoading && audioRef.current) {
      audioRef.current.src = sound
      audioRef.current.oncanplaythrough = () => {
        setIsAudioReady(true)
      }
    }
  }, [sound, isLoading])

  useEffect(() => {
    if (
      isAudioReady &&
      shuffledCards.length > 0 &&
      shuffledCards.every((card) => card.visible)
    ) {
      if (audioRef.current) {
        audioRef.current.play()
      }
    }
  }, [shuffledCards, isAudioReady])

  return { handleCardClick, resetGame, flippedCards, audioRef }
}

export default useGameLogic

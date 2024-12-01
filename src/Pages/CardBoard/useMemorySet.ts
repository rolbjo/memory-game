import { useEffect, useState } from 'react'
import { MemorySet, memorySets } from '../../components/data/cardsData'
import shuffleArray from '../../utils/shuffleArray'

const useMemorySet = (setId: string) => {
  const [shuffledCards, setShuffledCards] = useState<MemorySet['cards']>([])
  const [animations, setAnimations] = useState<MemorySet['animations']>([])
  const [cardBack, setCardBack] = useState<string>('')
  const [headerStyle, setHeaderStyle] = useState<string>('')
  const [sound, setSound] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (setId && memorySets[setId]) {
      const memorySet = memorySets[setId]
      setShuffledCards(
        shuffleArray(memorySet.cards).map((card) => ({
          ...card,
          visible: false,
        }))
      )
      setAnimations(memorySet.animations)
      setCardBack(memorySet.cardBack)
      setHeaderStyle(memorySet.headerStyle)
      setSound(memorySet.sound)

      document.body.style.backgroundImage = `url(${memorySet.backgroundImage})`

      setTimeout(() => {
        setIsLoading(false)
      }, 100)
    }
    return () => {
      document.body.style.backgroundImage = ''
    }
  }, [setId])

  return {
    shuffledCards,
    setShuffledCards,
    animations,
    cardBack,
    headerStyle,
    sound,
    isLoading,
  }
}

export default useMemorySet

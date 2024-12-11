export interface Card {
  id: number
  src: string
  alt: string
  visible: boolean
}

export interface Animation {
  src: string
  loop: boolean
  autoplay: boolean
}

export interface MemorySet {
  cards: Card[]
  animations: Animation[]
  cardBack: string
  backgroundImage: string
  headerStyle: string
  sound: string
}

interface MemorySets {
  [key: string]: MemorySet
}

export const japanMemoryCards = [
  {
    id: 1,
    src: 'cherry-river.avif',
    alt: 'cherry river',
  },
  { id: 2, src: 'red-gate.avif', alt: 'red gate' },
  { id: 3, src: 'golden-house.avif', alt: 'golden house' },
  { id: 4, src: 'castle.avif', alt: 'castle' },
]

export const japanAnimations = [
  { src: 'cherrymation.json', loop: true, autoplay: true },
  { src: 'happy-dog.json', loop: true, autoplay: true },
]

export const swedenMemoryCards = [
  {
    id: 1,
    src: 'moose.avif',
    alt: 'moose',
  },
  { id: 2, src: 'ikea.avif', alt: 'cow' },
  { id: 3, src: 'meatballs.avif', alt: 'meatballs' },
  { id: 4, src: 'cottage.avif', alt: 'cottage' },
]

export const swedenAnimations = [
  { src: 'swefetti.json', loop: true, autoplay: true },
  { src: 'fishing.json', loop: true, autoplay: true },
]

export const memorySets: MemorySets = {
  japan: {
    cards: [...japanMemoryCards, ...japanMemoryCards].map((card, index) => ({
      ...card,
      id: index + 1,
      visible: false,
    })),
    animations: japanAnimations,
    sound: 'japan-sound.wav',
    cardBack: 'japan-flag.webp',
    backgroundImage: 'cherry-tree.avif',
    headerStyle: 'red',
  },
  sweden: {
    cards: [...swedenMemoryCards, ...swedenMemoryCards].map((card, index) => ({
      ...card,
      id: index + 1,
      visible: false,
    })),
    animations: swedenAnimations,
    sound: 'sweden-sound.wav',
    cardBack: 'sweden.webp',
    backgroundImage: 'lake.avif',
    headerStyle: 'blue',
  },
}

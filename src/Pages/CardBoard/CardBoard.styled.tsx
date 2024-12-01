import styled from 'styled-components'

export const StyledCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: solid 2px lightgray;
  border-radius: 10px;
`

export const BoardGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(100px, 200px));
  grid-template-rows: repeat(2, minmax(100px, 200px));
  gap: 140px;
  padding-bottom: 45px;

  @media (max-width: 1200px) {
    gap: 50px;
    align-items: center;
  }
  @media (max-width: 700px) {
    gap: 30px;
    align-items: center;
    grid-template-columns: repeat(2, minmax(100px, 100px));
    grid-template-rows: repeat(4, minmax(100px, 100px));
  }
`

export const CardContainer = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  cursor: pointer;
`

export const CardInner = styled.div<{ isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ isFlipped }) =>
    isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`

export const CardBack = styled.div<{ cardBack: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-image: url(${({ cardBack }) => cardBack});
  background-size: cover;
  background-position: center;
  border: solid 3px lightgray;
  border-radius: 10px;
  transform: rotateY(0deg);
`
export const Header = styled.h1`
  margin: 0;
  padding: 20px 0 40px;
  font-size: 40px;

  text-align: center;
  text-shadow: 2px 2px 2px black;
  @media (max-width: 450px) {
    font-size: 30px;
    padding-top: 25px;
  }
`
export const AnimationContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`
export const OverlappingAnimation = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;

  z-index: 2;
`
export const ResetButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  &:active {
    background-color: #3e8e41;
    transform: scale(0.95);
  }
`

import { useNavigate } from 'react-router-dom'
import { TbArrowBigLeftFilled } from 'react-icons/tb'
import styled from 'styled-components'

const StyledBackIcon = styled(TbArrowBigLeftFilled)`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 40px;
  color: floralwhite;
  padding: 3px;
  background-color: #bc002d;
  z-index: 3;
  border-radius: 10px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ded3d3;
  }

  &:active {
    color: #ded3d3;
  }
  @media (max-width: 450px) {
    font-size: 25px;
    top: 10px;
    left: 10px;
  }
`

const BackButton = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  return <StyledBackIcon onClick={handleBackClick} />
}

export default BackButton

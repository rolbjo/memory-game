import styled from 'styled-components'
export const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
`
export const MenuItem = styled.li`
  display: inline-block;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
  color: black;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e2d7d7;
  }
`

export const MenuHeader = styled.h1`
  padding: 30px;
`
export const MenuWrapper = styled.div`
  background-image: url(/menu-flags.avif);
  height: 100vh;
  background-size: cover;
`

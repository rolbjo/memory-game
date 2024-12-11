import { Link } from 'react-router-dom'
import { MenuList, MenuItem, MenuHeader, MenuWrapper } from './Menu.styled'
import { useEffect, useState } from 'react'

const Menu = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.body.style.backgroundImage = 'url(menu-flags.avif)'
    setTimeout(() => {
      setIsLoading(false)
    }, 100)
  }, [])

  if (isLoading) {
    return <div style={{ backgroundColor: 'white', height: '100vh' }}></div>
  }
  return (
    <MenuWrapper>
      <MenuHeader>Menu</MenuHeader>
      <MenuList>
        <Link to={'/memory/japan'}>
          <MenuItem>Japan memory</MenuItem>
        </Link>
        <Link to={'/memory/sweden'}>
          <MenuItem>Sweden memory</MenuItem>
        </Link>
      </MenuList>
    </MenuWrapper>
  )
}
export default Menu

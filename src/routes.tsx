import Menu from './Pages/Menu/MenuPage'
import PlayField from './Pages/CardBoard/CardBoardPage'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Menu />,
  },
  {
    path: '/memory/:setId',
    element: <PlayField />,
  },
]

export const router = createBrowserRouter(routes)

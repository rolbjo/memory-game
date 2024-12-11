import Menu from './Pages/Menu/MenuPage'
import PlayField from './Pages/CardBoard/CardBoardPage'
import { createHashRouter, RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Menu />,
  },
  {
    path: '/memory/:setId',
    element: <PlayField />,
  },
  {
    path: '*',
    element: <div>404 Not Found</div>,
  },
]

export const router = createHashRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
})

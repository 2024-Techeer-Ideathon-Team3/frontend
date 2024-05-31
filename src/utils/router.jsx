import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import SelectTopic from '../pages/SelectTopic'
import FinalSelectPage from '../pages/FinalSelectPage'
import SelectColorPage from '../pages/SelectColorPage'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/topic',
    element: <SelectTopic />,
  },
  {
    path: '/final',
    element: <FinalSelectPage />,
  },
  { path: '/color', element: <SelectColorPage /> },
])
export default routers

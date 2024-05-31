import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import SelectTopic from '../pages/SelectTopic'
import FinalSelectPage from '../pages/FinalSelectPage'
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
])
export default routers

import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import SelectTopic from '../pages/SelectTopic'
const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/topic',
    element: <SelectTopic />,
  },
])

export default routers

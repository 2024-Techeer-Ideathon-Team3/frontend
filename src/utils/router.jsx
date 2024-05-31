import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../page/MainPage'

import SelectTopic from '../pages/SelectTopic'
const routers = createBrowserRouter([
   {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/SelectTopic',
    element: <SelectTopic />,
  },
 
])

export default routers

import { createBrowserRouter } from 'react-router-dom'
import SelectTopic from '../pages/SelectTopic'
const routers = createBrowserRouter([
  {
    path: '/SelectTopic',
    element: <SelectTopic />,
  },
])
export default routers

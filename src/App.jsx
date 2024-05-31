import { RouterProvider } from 'react-router-dom'
import routers from './utils/router'
export default function App() {
  return (
    <div className="h-full">
      <RouterProvider router={routers} />
    </div>
  )
}

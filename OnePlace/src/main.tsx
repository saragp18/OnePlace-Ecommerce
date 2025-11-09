import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.tsx'
import NewPage from './pages/newPage.tsx'

const Routes= createBrowserRouter([{
  path:"/",
  element:<Home/>
},
{
  path:"/new",
  element: <NewPage />
},
{
  path:"/moresells",
  element: <h2> More Sells page</h2>
},{
  path:"/sell",
  element: <h2> sell page</h2>
},{
  path:"/collection",
  element: <h2> Collection page</h2>
},])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Routes}/>
  </StrictMode>,
)

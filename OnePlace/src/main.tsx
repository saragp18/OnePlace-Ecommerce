import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.tsx'
import Moresellspage from './pages/Moresellspage.tsx'
import DetailProductPage from './pages/DetailProductPage.tsx'


const routes= createBrowserRouter ([{
  path:"/",
  element:<Home/>

},
{
  path:"/new",
  element: <h2> new page</h2>
},
{
  path:"/categories",
  element: <h2> Categories page</h2>
},{
  path:"/moresells",
  element: < Moresellspage/>
},{
  path:"/sell",
  element: <h2> sell page</h2>
},{
  path:"/collection",
  element: <h2> Collection page</h2>
},
{
 path:"/" 
},
{path:"/Product/:id",
  element:<DetailProductPage />}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)

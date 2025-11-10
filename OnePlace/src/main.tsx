import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.tsx'
import ManPage from './pages/ManPage.tsx'
import DetailProduct from './pages/detailProduct.tsx'


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
  element: <h2> More Sells page</h2>
},{
  path:"/sell",
  element: <h2> sell page</h2>
},{
  path:"/collection",
  element: <h2> Collection page</h2>
},
{
  path:"/men",
  element: <ManPage/>
},{
  path:"/Product/:id",
  element:<DetailProduct/>
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)

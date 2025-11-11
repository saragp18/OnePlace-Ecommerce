import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.tsx'
import Moresellspage from './pages/Moresellspage.tsx'
import DetailProductPage from './pages/DetailProductPage.tsx'

import NewPage from './pages/newPage.tsx'

import CategoriesPage from './pages/categoriesPage.tsx'
import ManPage from './pages/ManPage.tsx'
import DetailProduct from './pages/detailProduct.tsx'


const Routes= createBrowserRouter([{
  path:"/",
  element:<Home/>
},
{
  path:"/new",
  element: <NewPage />
},
{
  path:"/categories",
  element: <CategoriesPage />
},{
  path:"/moresells",
  element: <Moresellspage/>
},{
  path:"/sell",
  element: <h2> sell page</h2>
},{
  path:"/collection",
  element: <h2> Collection page</h2>
},])
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
    <RouterProvider router={Routes}/>
  </StrictMode>,
)

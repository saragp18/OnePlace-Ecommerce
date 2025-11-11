import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.tsx'
import Moresellspage from './pages/Moresellspage.tsx'

import NewPage from './pages/newPage.tsx'

import CategoriesPage from './pages/categoriesPage.tsx'
import ManPage from './pages/ManPage.tsx'
import DetailProduct from './pages/detailProduct.tsx'
import AddProduct from './pages/AddProductForm.tsx'
import CommentPage from './pages/CommentPage.tsx'
import LoginPage from './pages/LoginPage.tsx'


const Routes= createBrowserRouter([{
  path:"/",
  element: <LoginPage/>,

},
{
  path:"/Home",
  element:<Home/>,
   
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
  element: <AddProduct/>
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
},{
  path:"/CommentPage",
  element: <CommentPage/>
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Routes}/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

// Páginas
import Home from './pages/home.tsx'
import Moresellspage from './pages/Moresellspage.tsx'
import NewPage from './pages/newPage.tsx'
import CategoriesPage from './pages/categoriesPage.tsx'
import ManPage from './pages/ManPage.tsx'
import DetailProduct from './pages/detailProduct.tsx'
import AddProduct from './pages/AddProductForm.tsx'
import CommentPage from './pages/CommentPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import WomanPage from './pages/WomanPage.tsx'
import JacketsPage from './pages/JacketsPage.tsx'
import JeanPage from './pages/JeanPage.tsx'
import ShirtsPage from './pages/ShirtsPage.tsx'
import TshirtsPage from './pages/TshirtPage.tsx'
import ShortPage from './pages/ShortPage.tsx'
import SueterPage from './pages/SueterPage.tsx'
import CartPage from './pages/CartPage.tsx'

const Routes = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/Home", element: <Home /> },
  { path: "/new", element: <NewPage /> },
  { path: "/categories", element: <CategoriesPage /> },
  { path: "/moresells", element: <Moresellspage /> },
  { path: "/sell", element: <AddProduct /> },
  { path: "/men", element: <ManPage /> },
  { path: "/Product/:id", element: <DetailProduct /> },
  { path: "/CommentPage", element: <CommentPage /> },
  { path: "/RegisterPage", element: <RegisterPage /> },
  { path: "/woman", element: <WomanPage /> },
  { path: "/jackets", element: <JacketsPage /> },
  { path: "/jeans", element: <JeanPage /> },
  { path: "/shirts", element: <ShirtsPage /> },
  { path: "/T-shirts", element: <TshirtsPage /> },
  { path: "/bermudas", element: <ShortPage /> },
  { path: "/sweaters", element: <SueterPage /> },
  { path: "/cart", element: <CartPage/> },

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={Routes} />
    </Provider>
  </StrictMode>,
)

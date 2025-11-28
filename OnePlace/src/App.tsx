import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import CategoriesPage from "./pages/categoriesPage";
import CartPage from "./pages/CartPage";
import DetailProduct from "./components/DetailProduct";
import UserPage from "./pages/UserPage";

/**
Función App.
Define la estructura de rutas de la aplicación usando React Router.

Entradas:
- No recibe parámetros.

Salidas:
- Retorna un componente JSX que contiene todas las rutas de la aplicación:
  - "/" y "/home": página principal (Home)
  - "/categories": página de categorías
  - "/cart": página del carrito
  - "/product/:id": detalle de un producto
  - "/user": página del usuario
*/
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* CATEGORIES */}
        <Route path="/categories" element={<CategoriesPage />} />

        {/* CART */}
        <Route path="/cart" element={<CartPage />} />

        {/* PRODUCT DETAIL */}
        <Route path="/product/:id" element={<DetailProduct />} />

            {/* USER PAGE */}
        <Route path="/user" element={<UserPage />} /> 

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import CategoriesPage from "./pages/categoriesPage";
import CartPage from "./pages/CartPage";
import DetailProduct from "./components/DetailProduct";

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;

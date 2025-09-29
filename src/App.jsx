// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/frontpages/Dashboard";
import ProductDetail from "./pages/frontpages/ProductDetail";
import Cart from "./pages/frontpages/Cart";
import Checkout from "./pages/frontpages/Checkout";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

// Admin pages
import AdminLayout from "./layouts/AdminLayout";
import AdminHome from "./pages/adminpages/AdminHome";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import AboutPage from "./pages/adminpages/AboutPage";

function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <BrowserRouter>
          {/* Navbar hanya untuk user (frontpages) */}
          <Navbar />

         <Routes>
          {/* Frontend */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        </Routes>
        </BrowserRouter>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;

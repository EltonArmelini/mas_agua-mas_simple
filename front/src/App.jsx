import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Dashboard from "./Layouts/Dashboard";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import NewOrder from "./pages/NewOrder";
import SummaryOrders from "./pages/SummaryOrders";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import ProductDetail from "./pages/ProductDetail";
import Deliveries from "./pages/Deliveries";
import LoginPage from "./pages/LoginPage";
import "./styles/custom.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página de login */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Rutas para el Dashboard y sus hijos */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="order-detail" element={<OrderDetail />} />
          <Route path="new-order" element={<NewOrder />} />
          <Route path="summary" element={<SummaryOrders />} />
          {/* Rutas para el operador */}
          <Route path="products" element={<Products />} />
          <Route path="new-product" element={<NewProduct />} />
          <Route path="product-detail" element={<ProductDetail />} />
          {/* Rutas para los repartidores */}
          <Route path="deliveries" element={<Deliveries />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

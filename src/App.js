import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AllOrdersPage from "./pages/AllOrdersPage";
import AllProductsPage from "./pages/AllProductsPage";
import CustomersDataPage from "./pages/CustomersDataPage";
import AllSuppliersPage from "./pages/AllSuppliersPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/orders" element={<AllOrdersPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/suppliers" element={<AllSuppliersPage />} />
        <Route path="/customers" element={<CustomersDataPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;

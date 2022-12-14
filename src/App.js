import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import LoginPage from "./core/Auth/pages/Login";
import SigneUpPage from "./core/Auth/pages/Register";
import AuthProvider from "./core/Auth/Providers/AuthProvider";
import Layout from "./core/Layout/Layout";
import DashboardPage from "./modules/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SigneUpPage />} />
          <Route
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

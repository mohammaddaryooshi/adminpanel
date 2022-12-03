import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./core/Auth/pages/Login";
import SigneUpPage from "./core/Auth/pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SigneUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

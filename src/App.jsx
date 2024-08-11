import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAccount } from 'wagmi'

import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import NoPage from "./pages/noPage/NoPage";
import MyStructure from "./pages/mystructure/MyStructure";
import Profile from "./pages/profile/Profile";
import Wallets from "./pages/wallets/Wallets";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/wallets" element={<PrivateRoute><Wallets /></PrivateRoute>} />
          <Route path="/mystructure" element={<PrivateRoute><MyStructure /></PrivateRoute>} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const PrivateRoute = ({ children }) => {
  const account = useAccount();
  return account.status === "connected" ? children : <Navigate to="/" />;
};

export default App

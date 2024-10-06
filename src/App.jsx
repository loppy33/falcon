import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAccount } from 'wagmi'

import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import NoPage from "./pages/noPage/NoPage";
import MyStructure from "./pages/mystructure/MyStructure";
import Profile from "./pages/profile/Profile";
import Wallets from "./pages/wallets/Wallets";
import Academy from "./pages/academy/Academy";
import Detailed from "./pages/academy/Detailed/Detailed";
import Launchpad from "./pages/launchpad/Launchpad";
import LaunchpadDetailed from "./pages/launchpad/LaunchpadDetailed/LaunchpadDetailed";
import MyLicense from "./pages/mylicense/MyLicense";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />

          <Route path="/wallets" element={<PrivateRoute><Wallets /></PrivateRoute>} />
          <Route path="/launchpad" element={<PrivateRoute><Launchpad /></PrivateRoute>} />
          <Route path="/launchpad/:id" element={<PrivateRoute><LaunchpadDetailed /></PrivateRoute>} />


          <Route path="/academy" element={<PrivateRoute><Academy /></PrivateRoute>} />
          <Route path="/academy/:id" element={<PrivateRoute><Detailed /></PrivateRoute>} />
          
          <Route path="/mylicense" element={<PrivateRoute><MyLicense /></PrivateRoute>} />
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

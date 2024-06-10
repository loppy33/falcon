import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import NoPage from "./pages/NoPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/falcon" element={<Layout />}>
          <Route path="/falcon/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

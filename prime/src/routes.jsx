import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Filme from "./pages/filme/filme";
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes/:id" element={<Filme />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

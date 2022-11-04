import Linktree from "./Linktree";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Contact from "./Contact"

const App = () => {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Linktree />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
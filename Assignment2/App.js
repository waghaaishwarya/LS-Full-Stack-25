// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import WatchLater from "./pages/watchlater";
import Timer from "./components/timer";

function App() {
  return (
    
    <Router>
  <Navbar />
  <Timer />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/watch-later" element={<WatchLater />} />
  </Routes>
  <footer className="bg-gray-200 dark:bg-gray-800 text-center text-sm text-gray-700 dark:text-gray-300 py-4 mt-10">
    © 2025 Aaishwarya Wagh · <a href="https://github.com/waghaaishwarya">GitHub</a> · <a href="https://www.linkedin.com/in/aaishwaryaawagh/">LinkedIn</a>
  </footer>
</Router>

    
  );
}

export default App;


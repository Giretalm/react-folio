import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import navbar from "./componenets/Navbar";
import footer from "./components/footer";
import home from "./pages/home";
import about from "./pages/about";
import projects from "./pages/projects";
import contact from "./pages/contact";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/about" element={<about />} />
        <Route path="/projects" element={<projects />} />
        <Route path="/contact" element={<contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
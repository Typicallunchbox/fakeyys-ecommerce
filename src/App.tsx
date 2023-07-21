import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import './style.scss';

//Page imports
import Landing from "./pages/index"; 
import About from "./pages/about"; 
import Catalogue from "./pages/catalogue"; 
import Product from "./pages/product"; 
import Error from "./pages/error";

//Component imports
import Navbar from "./components/navbar/index";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/catalogue/product/:id" element={<Product />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
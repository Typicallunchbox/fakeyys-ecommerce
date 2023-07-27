import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
  const location = useLocation();
  return (
    <>
      <AnimatePresence initial={false} mode='wait'>
        <Navbar />
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/catalogue/product/:id" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
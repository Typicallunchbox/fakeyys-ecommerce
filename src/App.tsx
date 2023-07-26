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
        <AnimatePresence initial={false} mode='wait' >
          <Routes>
            <Route key={"/"} path="/" element={<Landing />} />
            <Route key={"/about"} path="/about" element={<About />} />
            <Route key={"/catalogue"} path="/catalogue" element={<Catalogue />} />
            <Route key={"/catalogue/product"} path="/catalogue/product/:id" element={<Product />} />
            <Route key={"error"} path="*" element={<Error />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
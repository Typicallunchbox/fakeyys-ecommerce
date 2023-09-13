import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import './style.scss';

//Page imports
import Landing from "./pages/index"; 
import About from "./pages/about"; 
import Catalogue from "./pages/catalogue"; 
import Product from "./pages/product"; 
import Error from "./pages/error";
import { DeviceContextProvider } from './contexts/device-context';

//Component imports
import Navbar from "./components/navbar/index";
import Cart from "./components/cart/index";
import { ProductContextProvider } from "./contexts/product-context";

function App() {
  const location = useLocation();
  return (
    <>
    <DeviceContextProvider>
      <ProductContextProvider>
        <AnimatePresence initial={true} mode='wait'>
          <Navbar key={"nav"}/>
          <Cart key={"cart"} />
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/catalogue/product/:id" element={<Product />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AnimatePresence>
      </ProductContextProvider>
    </DeviceContextProvider>
    </>
  );
}

export default App;
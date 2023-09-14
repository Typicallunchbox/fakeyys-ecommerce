import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import './style.scss';

//Page imports
import { DeviceContextProvider } from './contexts/device-context';
import About from "./pages/about";
import Catalogue from "./pages/catalogue";
import Error from "./pages/error";
import Landing from "./pages/index";

//Component imports
import Cart from "./components/cart/index";
import Navbar from "./components/navbar/index";
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
            <Route path="*" element={<Error />} />
          </Routes>
        </AnimatePresence>
      </ProductContextProvider>
    </DeviceContextProvider>
    </>
  );
}

export default App;
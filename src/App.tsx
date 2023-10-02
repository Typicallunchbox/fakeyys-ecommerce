import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import './style.scss';

//Page imports
import About from "./pages/about";
import Catalogue from "./pages/catalogue";
import Error from "./pages/error";
import Landing from "./pages/index";

//Component imports
import Cart from "./components/cart/index";
import Navbar from "./components/navbar/index";
import { SnackbarProvider } from 'notistack';
import { ProductContextProvider } from "./contexts/product-context";
import { DeviceContextProvider } from './contexts/device-context';

function App() {
  const location = useLocation();
  return (
    <>
    <DeviceContextProvider>
      <ProductContextProvider>
        <AnimatePresence initial={true} mode='wait'>
          <SnackbarProvider>
          <Navbar key={"nav"}/>
          <Cart key={"cart"} />
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="*" element={<Error />} />
          </Routes>
          </SnackbarProvider>
        </AnimatePresence>
      </ProductContextProvider>
    </DeviceContextProvider>
    </>
  );
}

export default App;
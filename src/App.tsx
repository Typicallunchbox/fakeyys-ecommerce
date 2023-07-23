// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, Route } from "wouter";
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
            <Navbar />
        <AnimatePresence mode='wait'>
            <Route key={'landing'} path="/" component={Landing} />
            <Route key={'about'} path="/about" component={About} />
            <Route key={'catalogue'} path="/catalogue" component={Catalogue} />
            <Route key={'product'} path="/catalogue/product/:id" component={Product} />
            <Route key={'error'} path="*" component={Error} />
        </AnimatePresence>
    </>
  );
}

export default App;
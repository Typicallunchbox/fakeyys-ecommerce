import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/catalogue" element={<div>Catalogue</div>} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
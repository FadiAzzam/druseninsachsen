import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Impressum from "./components/Impressum";
import Faq from "./components/Faq";


import {
  BrowserRouter as Router,
} from "react-router-dom";

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Impressum from "./components/Impressum";
import Faq from "./components/Faq";

import About from "./components/About";
import AboutDurse from "./components/AboutDurse";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about-druse" element={<AboutDurse />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

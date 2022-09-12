import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Impressum from "./components/Impressum";
import Faq from "./components/Faq";

import DataSecurity from "./components/Documention/DataSecurity";
import Functionality from "./components/Documention/Functionality";
import Interfaces from "./components/Documention/Interfaces";
import TechnicalRequirements from "./components/Documention/TechnicalRequirements";
import Tutorial from "./components/Documention/Tutorial";


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
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/technical-requirements" element={<TechnicalRequirements />} />
          <Route path="/interfaces" element={<Interfaces />} />
          <Route path="/functionality" element={<Functionality />} />
          <Route path="/data-security" element={<DataSecurity />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

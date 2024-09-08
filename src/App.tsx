import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      <div className="pageBg"></div>
      <div className="pageContent">
        <Navbar />
        <Routes>
          <Route path="/Ian_E-Portfolio" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

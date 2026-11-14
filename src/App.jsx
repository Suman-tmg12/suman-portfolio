import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Work from "./pages/Work.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main key={pathname} className="animate-fade-up">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
import "./App.css";
import Hero from "./pages/Hero";
import MainContent from "./pages/MainContent";
import Footer from "./pages/Utilities/Footer";
import Navbar from "./pages/Utilities/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import Join from "./assets/Join/Join";
import Testimonials from "./assets/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import Programs from "./components/HeroSection/Programs/Programs";
import Plans from "./components/Plans/Plans";
import Reasons from "./components/Reasons/Reasons";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;

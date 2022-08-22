import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Navbar from "./components/Navbar/Navbar";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";
import Projects from "./components/Projects/Projects";
import BottomSvg from "./components/Svg/BottomSvg/BottomSvg";
function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <Navbar />
      <About />
      <Projects />
      <Blog />
      <BottomSvg />
    </div>
  );
}

export default App;

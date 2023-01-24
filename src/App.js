import './App.css';
import About from './components/About';
import FeatuteSection from './components/FeatureSection1';
import FeatureSection2 from './components/FeatureSection2';
import HeroSection from './components/HeroSection';
import IndustrysSection from './components/IndustrySection';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <FeatuteSection /> {/* add feature section component 1*/}
      <IndustrysSection />
      <FeatureSection2 /> {/* add feature section component 2 */}
      <About />
    </div>
  );
}

export default App;

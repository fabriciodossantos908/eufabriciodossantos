import "./App.css";
import "./styles/main.css";

import { Waves } from "./components/Waves";
import { HeroSection } from "./components/HeroSection";
import { Projects } from "./components/Projects";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App w-full h-full bg-black-color">
      <HeroSection>
        <Waves top={false} />
      </HeroSection>
      <Projects />

      <Footer>
        <Waves flip={true} top={true} />
      </Footer>
    </div>
  );
}

export default App;

import "./App.css";
import "./styles/main.css";

import { Waves } from "./components/Waves";
import { HeroSection } from "./components/HeroSection";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App w-screen h-full ">
      <HeroSection>
        <Waves />
      </HeroSection>
    </div>
  );
}

export default App;

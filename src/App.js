import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar"
import Skills from "./components/skills";
import Work from "./components/work";
function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;

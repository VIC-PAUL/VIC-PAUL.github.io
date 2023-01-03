import About from "./Components/About";
import Cont from "./Components/Cont";
import Contact from "./Components/Contact";
import Github from "./Components/Github";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";


function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Github/>
      <Contact />
      <Cont />
      
    </div>
  );
}

export default App;

import Navbar from '../src/components/NavBar/Navbar';
import Intro from '../src/components/Intro/Intro';
import './App.css';
import Services from '../src/components/Services/Services';
import Experience from '../src/components/Experience/Experience'
import Works from '../src/components/Works/Works';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    <Works/>
    </div>
  );
}

export default App;

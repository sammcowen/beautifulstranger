import Navbar from '../src/components/NavBar/Navbar';
import Intro from '../src/components/Intro/Intro';
import './App.css';
import Services from '../src/components/Services/Services';
import Experience from '../src/components/Experience/Experience'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    </div>
  );
}

export default App;

import Navbar from '../src/components/NavBar/Navbar';
import Intro from '../src/components/Intro/Intro';
import './App.css';
import Services from '../src/components/Services/Services';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Services/>
    </div>
  );
}

export default App;

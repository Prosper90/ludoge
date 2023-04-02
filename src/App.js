import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="bg-[#000] text-sm font-semibold">

      <Navbar />

      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>

      <Footer />


    </div>
  );
}

export default App;

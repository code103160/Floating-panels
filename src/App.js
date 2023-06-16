import logo from './logo.svg';
//import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Sidelink from './Components/Sidelinks';
import Principal from './Components/Principal';
import Direita from './Components/Direita';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div class="row mb-2">
        <Sidelink />
        <Principal />
        <Direita />
      </div>
      <Footer />
    </div>
  );
}

export default App;

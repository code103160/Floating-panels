import logo from './logo.svg';
//import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Sidelink from './Components/Sidelinks';
import Principal from './Components/Principal';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div class="container">
        <div class="row">
          <Sidelink />
          <Principal />
        </div>
      </div>
      
    </div>
  );
}

export default App;

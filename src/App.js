import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {Dashboard} from './Components/VideoContainer/Dashboard'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default App;

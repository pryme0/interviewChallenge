import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { VideoComponent } from "./Components/VideoContainer/VideoComponent";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <VideoComponent />
      <Footer />
    </div>
  );
}

export default App;

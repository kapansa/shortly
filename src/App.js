import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/Herosection/Herosection";
import Dashboard from "./components/Dashboard/Dashboard";
import Ctasection from "./components/Ctasection/Ctasection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <Herosection />
      </div>
      <Dashboard />
      <Ctasection />
      <Footer />
    </div>
  );
}

export default App;

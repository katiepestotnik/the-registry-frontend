import './App.css';
import Header from "./components/Header";
import Hyperlink from "./components/Hyperlink"
import HolidayMain from "./components/HolidayMain";
import WeddingMain from "./components/WeddingMain";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hyperlink />
      <HolidayMain />
      <WeddingMain />
      <Footer/>
    </div>
  );
}

export default App;

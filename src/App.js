import './App.css';
//duplicates
//import Header from "./components/Header";
import Hyperlink from "./components/Hyperlink"
import HolidayMain from "./components/HolidayMain";
import WeddingMain from "./components/WeddingMain";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Global from "./Global";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Global>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route
          path="/signup"
          render={(rp)=> <Signup {...rp}/>}>
        </Route>
        <Route
          path="/login"
          render={(rp)=> <Login {...rp}/>}>
        </Route>
        <Route
          path="/registry"
          render={(rp) => {
            <>
            <HolidayMain {...rp} />
            <WeddingMain {...rp} />
            </>
          }}>
        </Route>
      <Hyperlink />
      <Footer/>
      </Switch>
    </Global>
  );
}

export default App;

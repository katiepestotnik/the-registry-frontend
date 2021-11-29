import './App.css';
import Header from "./components/Header";
import HolidayMain from "./components/HolidayMain";
import WeddingMain from "./components/WeddingMain";
// import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Global from "./Global";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Registry from "./pages/Registry";

function App() {
  return (
    <Global>
      <Header />
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
          render={(rp)=><Registry {...rp}/>}>
        </Route>
        <Route
          path="/wed-registry"
          render={(rp)=><WeddingMain {...rp}/>}>
        </Route>
        <Route
          path="/hol-registry"
          render={(rp)=><HolidayMain {...rp}/>}>
        </Route>
      </Switch>
    </Global>
  );
}
export default App;

import {Link} from 'react-router-dom';
//global state access to Context in Global
import { Context } from "../Global";
import { useContext} from 'react';
import Header from "../components/Header"
const Home = (props) => {
    const [state, setState] = useContext(Context);
    <Link to="/">
        <button onClick={() => {
            window.localStorage.removeItem("token")
            setState({...state, token:null})
        }}>
            LOGOUT
        </button>
    </Link>
    return (
        <div>
        <Header/>
        <Link to="/signup"><h2>REGISTER</h2></Link>
        <Link to="/login"><h2>LOGIN</h2></Link>
        </div>
    );
};
export default Home;
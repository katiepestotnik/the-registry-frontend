import {Link} from 'react-router-dom';
//global state access to Context in Global
import { Context } from "../Global";
import { useContext} from 'react';

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
        <ul className="nav justify-content-center">
            <li class="nav-item">
            <Link to="/login" style={{textDecoration:"none"}}><h2 className="nav-decoration">LOGIN</h2></Link>
            </li>
            <li class="nav-item">
            <Link to="/signup" style={{textDecoration:"none"}}><h2 className="nav-decoration">REGISTER</h2></Link>
            </li>
        </ul>
        <div className="overlap-content">
            <h3>Welcome to your Registry</h3>
            <p className="home-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>
        </div>
    );
};
export default Home;
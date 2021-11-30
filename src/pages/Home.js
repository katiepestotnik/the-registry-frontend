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
            <p className="home-paragraph">Choose between a wedding or holiday wishlist and add items to your list. There is a list of suggested items from Etsy that you might look through and add to your list!</p>

        </div>
        </div>
    );
};
export default Home;
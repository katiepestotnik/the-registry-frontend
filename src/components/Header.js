import { Link } from 'react-router-dom';
import { Context } from "../Global";
import { useContext} from 'react';
const Header = (props) => {
    const [state, setState] = useContext(Context);
    const logout = <Link to="/">
    <button className="logout-button" onClick={() => {
        window.localStorage.removeItem("token")
        setState({...state, token:null})
    }}>
        LOGOUT
    </button>
</Link>
    return (
        <div className="header-bg">
            <nav className="container">
                <h1>The Registry</h1>
                <Link className="logout" to="/">{state.token?logout:null}</Link>
            </nav>
        </div>
    );
};
export default Header;
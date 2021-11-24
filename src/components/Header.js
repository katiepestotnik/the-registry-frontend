import { Link } from 'react-router-dom';
import { Context } from "../Global";
import { useContext, useEffect } from 'react';
const Header = (props) => {
    const [state, setState] = useContext(Context);
    const logout = <Link to="/">
    <button onClick={() => {
        window.localStorage.removeItem("token")
        setState({...state, token:null})
    }}>
        LOGOUT
    </button>
</Link>
    return (
        <div>
        <nav>
                <h1>The Registry</h1>
                <Link to="/">{state.token?logout:null}</Link>
            </nav>
        </div>
    );
};
export default Header;
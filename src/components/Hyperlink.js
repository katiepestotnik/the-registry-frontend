import { Link } from "react-router-dom";
import { Context } from "../Global";
import { useContext } from 'react';
const Hyperlink = (props) => {
    const [state, setState] = useContext(Context)
    console.log(state)
    return(
        <div>
        <h1 className="template-font">Choose between two registries...</h1>
        <ul className="nav justify-content-center">
            <li class="nav-item">
        <Link to="/wed-registry" style={{textDecoration:"none"}}><div className="template-registry img-wedding"><p className="template-text">Wedding Registry</p></div></Link></li>
        <li class="nav-item">
        <Link to="/hol-registry" style={{textDecoration:"none"}}><div className="template-registry img-holiday"><p className="template-text">Holiday Registry</p></div></Link>
        </li>
        </ul>
        </div>
    )
};
export default Hyperlink;
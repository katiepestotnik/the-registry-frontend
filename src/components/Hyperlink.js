import { Link } from "react-router-dom";
import { Context } from "../Global";
import { useContext } from 'react';
const Hyperlink = (props) => {
    const [state, setState] = useContext(Context)
    console.log(state)
    return(
    <div>
            <Link to={"/wed-registry"}><h2>Wedding Registry</h2></Link>
            <Link to={"/hol-registry"}><h2>Holiday Registry</h2></Link>
    </div>
    )
};
export default Hyperlink;
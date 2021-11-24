import { Link } from "react-router-dom";
const Hyperlink = (props) => {
    return(
    <div>
            <Link to={"/wed-registry"}><h2>Wedding Registry</h2></Link>
            <Link to={"/hol-registry"}><h2>Holiday Registry</h2></Link>
    </div>
    )
};
export default Hyperlink;
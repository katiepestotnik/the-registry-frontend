//import dependencies
import { useState } from "react";
import {Link} from "react-router-dom"

//create a function that will take in props
function Index(props) {
    //create state to hold registry data
    const [newRegistryItem, setRegistryItem] = useState({
        title: "",
        url: "",
  });
//   create handleChange function for bookmarks
  const handleChange = (event) => {
      setRegistryItem({ ...newRegistryItem, [event.target.name]: event.target.value });
  };

  //create handle submit function for RegistryItems
  //BONUS lab feature - reset RegistryItem input field in "form" 
  //to clear after creating the new RegistryItem
  const handleSubmit = (event) => {
    event.preventDefault(); //prevent refresh
    props.createRegistryItem(newRegistryItem);
    setRegistryItem({
        title: "",
        url: "",
    });
  };

 //next, loaded fxn
  const loaded = () => {
    return <section className="container">{props.registryItem.map((registryItem) => (
      <div key={registryItem._id}>
        <Link to={`/registryitem/${registryItem._id}`} className="container-links"><h1>{registryItemar.title}</h1></Link>
      </div>
      ))
      }
      </section>
  };

  //loading function
  const loading = () => {
    return <h1>One moment, loading...</h1>;
  };

  //want to return the title and url of new bookmark
  return (
    <section className="full-page-style">
      <form onSubmit={handleSubmit}>
        <input
          className="input-style"
          type="text"
          value={newRegistryItem.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          className="input-style"
          type="text"
          value={newRegistryItem.url}
          name="url"
          placeholder="url"
          onChange={handleChange}
        />
    
        <input className="button-style"type="submit" value="Add RegistryItem" />
      </form>
      {props.registryItem ? loaded() : loading()}
    </section>
  );
}

//export
export default Index;
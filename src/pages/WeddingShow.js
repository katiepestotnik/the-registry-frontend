// Show.js
import { useState } from 'react';
import {Link} from "react-router-dom"

function WeddingShow(props) {
    const [newForm, setNewForm] = useState({
        itemName: "",
        itemDescription: "",
        itemUrl: "",
  });
  //Forms
  const handleChange = (event) => {
      setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

//submit functions
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createWeddingItem(newForm);
    setNewForm({
        itemName: "",
        itemDescription: "",
        itemUrl: "",
    });
  };

  const loaded = () => {
      return props.WeddingItem.map((item) => (
          <div key={item._id}>
              <ul>
                  <li>{item.itemName}</li>
                  <li>{item.itemDescription}</li>
                  <li>{item.itemUrl}</li>
                </ul>
        <Link to={`/wed-registry/${item._id}`}><button>EDIT</button></Link>
      <button id="delete" onClick={() => props.deleteWeddingItem(item._id)}>
        DELETE
      </button>
          </div>
      ))
  }

  const etsyLoaded = () => {
    console.log(props.WeddingApiResponse)
      return props.WeddingApiResponse.map((products) => (
        <div>
            <ul>
              <li>"Test"</li>
                <li>{products.name}</li>
                <li><img src={products.image} alt="Product"></img></li>
                <li><a href={products.url}>{products.name}</a></li>
              </ul>
        </div>
    ))
  }

  
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.itemName}
          name="itemName"
          placeholder="Enter Product"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          value={newForm.itemDescription}
          name="itemDescription"
          placeholder="Your Description"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          value={newForm.itemUrl}
          name="itemUrl"
          placeholder="URL"
          onChange={handleChange}
          className="form-input"
        />
        <input type="submit" value="Add to your registry" />
      </form>
      {props.WeddingItem ? loaded() : loading()}
      {props.WeddingApiResponse? etsyLoaded() : loading()}
    </section>
  );
} 

export default WeddingShow
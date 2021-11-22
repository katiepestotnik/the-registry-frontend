// Show.js
import { useState } from 'react';

function HolidayShow(props) {
    const [newForm, setNewForm] = useState({
        itemName: "",
        itemDescription: "",
        itemUrl: "",
  });
//   const [editForm, setEditForm] = useState(holItem)

  //Forms

  const createRegistry = (event) => {
      setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };
//   const handleChange = event => {
//     setEditForm({ ...editForm, [event.target.name]: event.target.value })
//   };

//submit functions
  const createSubmit = (event) => {
    event.preventDefault();
    props.createHolidayItem(newForm);
    setNewForm({
        itemName: "",
        itemDescription: "",
        itemUrl: "",
    });
  };
//   const handleSubmit = event => {
//     event.preventDefault()
//     props.updateHolidayItem(editForm, holItem._id)
//     // props.history.push("/")
//   }

  const loaded = () => {
      return props.HolidayItem.map((item) => (
          <div key={item._id}>
              <ul>
                  <li>{item.itemName}</li>
                  <li>{item.itemDescription}</li>
                  <li>{item.itemUrl}</li>
                </ul>
      <button id="delete" onClick={() => props.deleteHolidayItem(item._id)}>
        DELETE
      </button>
          </div>
      ))
  }
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={createSubmit}>
        <input
          type="text"
          value={newForm.itemName}
          name="name"
          placeholder="Enter Product"
          onChange={createRegistry}
          className="form-input"
        />
        <input
          type="text"
          value={newForm.itemDescription}
          name="description"
          placeholder="Edit Description"
          onChange={createRegistry}
          className="form-input"
        />
        <input
          type="text"
          value={newForm.itemUrl}
          name="itemUrl"
          placeholder="Save Url"
          onChange={createRegistry}
          className="form-input"
        />
        <input type="submit" value="Add to your registry" />
      </form>
      {props.HolidayItem ? loaded() : loading()}
    </section>
  );


} 
    
export default HolidayShow


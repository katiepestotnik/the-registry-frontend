// Show.js
import { useState } from 'react';

function HolidayShow(props) {
    const [newForm, setNewForm] = useState({
        itemName: "",
        itemDescription: "",
        itemUrl: "",
  });
  const [editForm, setEditForm] = useState(null)
//   const updateItemID = useState(null)
//   const updateName = useState(null)
//   const updateDescription = useState(null)
//   const updateUrl = useState(null)
  //Forms

  const handleChange = (event) => {
      setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

//submit functions
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createHolidayItem(newForm);
    setNewForm({
        itemName: "",
        itemDescription: "",
        itemUrl: "",
    });
  };

  const loaded = () => {
    const updateChange = (event) => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
      }
    
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
      <form onSubmit={() => props.deleteHolidayItem(editForm, item._id)}>
        <input
          type="text"
          value={editForm.itemName}
          name="itemName"
          placeholder="Enter Product"
          onChange={updateChange}
          className="form-input"
        />
        <input
          type="text"
          value={editForm.itemDescription}
          name="itemDescription"
          placeholder="Your Description"
          onChange={updateChange}
          className="form-input"
        />
        <input
          type="text"
          value={editForm.itemUrl}
          name="itemUrl"
          placeholder="URL"
          onChange={updateChange}
          className="form-input"
        />
        <input type="submit" value="Change your registry" />
      </form>
      {/* <button id="update" onClick={() => {
          updateItemID.currentvalue = item._id
          updateName.current.value = item.itemName
          updateDescription.current.value = item.itemDescription
          updateUrl.current.value = item.itemUrl
          }}>
        EDIT
      </button> */}
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
      {props.HolidayItem ? loaded() : loading()}
    </section>
  );


} 
    
export default HolidayShow


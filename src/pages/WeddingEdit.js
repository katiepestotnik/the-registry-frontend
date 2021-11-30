import { useState } from "react"
function WeddingEdit(props) {
  const id = props.match.params.id
  const item = props.WeddingItem
  const weddingItem = item.find(p => p._id === id)             
  const [editForm, setEditForm] = useState(weddingItem)
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault()
    props.updateWeddingItem(editForm, weddingItem._id)
    props.history.push("/wed-registry")
  }


  return (
    <section>
      <div className="spacing-form">
        <div className="overlap-content">
        <h3 className="form-label">Update Item</h3>
      <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label for="ItemDescription" className="form-label">Item Name</label><br/>
        <input
          type="text"
          value={editForm.name}
          name="itemName"
          placeholder={weddingItem.itemName}
          onChange={handleChange}
          className="form-input"
        />
        </div>
        <div className="mb-3">
          <label for="ItemDescription" className="form-label">Item Description</label><br/>
        <input
          type="text"
          value={editForm.itemDescription}
          name="itemDescription"
          placeholder={weddingItem.itemDescription}
          onChange={handleChange}
        /></div>
        <div className="mb-3">
        <label for="ItemURL" className="form-label">Item URL</label><br/>
        <input
          type="text"
          value={editForm.itemUrl}
          name="itemUrl"
          placeholder={weddingItem.itemUrl}
          onChange={handleChange}
          className="form-input"
        /> </div>
        <input className="logout-button"type="submit" value="Update Item" />
      </form>
      </div>
      </div>
      </section>
  );
}

export default WeddingEdit 
import { useState } from "react"

function HolidayEdit(props) {
    const id = props.match.params.id
    const item = props.HolidayItem
    const holidayItem = item.find(p => p._id === id)             
    const [editForm, setEditForm] = useState(holidayItem)
    const handleChange = event => {
      setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }
    const handleSubmit = event => {
      event.preventDefault()
      props.updateHolidayItem(editForm, holidayItem._id)
      props.history.push("/hol-registry")
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
            placeholder={holidayItem.itemName}
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
            placeholder={holidayItem.itemDescription}
            onChange={handleChange}
          /></div>
          <div className="mb-3">
          <label for="ItemURL" className="form-label">Item URL</label><br/>
          <input
            type="text"
            value={editForm.itemUrl}
            name="itemUrl"
            placeholder={holidayItem.itemUrl}
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
  
  export default HolidayEdit 
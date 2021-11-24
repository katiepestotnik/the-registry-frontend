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
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editForm.name}
            name="name"
            placeholder={holidayItem.itemName}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            value={editForm.itemDescription}
            name="itemDescription"
            placeholder={holidayItem.itemDescription}
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.itemUrl}
            name="itemUrl"
            placeholder={holidayItem.itemUrl}
            onChange={handleChange}
            className="form-input"
          /> <br />
          <input type="submit" value="Update Item" />
        </form>
      </div>
    )
  }
  
  export default HolidayEdit 
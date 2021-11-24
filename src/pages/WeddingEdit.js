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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="itemName"
          placeholder={weddingItem.itemName}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          value={editForm.itemDescription}
          name="itemDescription"
          placeholder={weddingItem.itemDescription}
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.itemUrl}
          name="itemUrl"
          placeholder={weddingItem.itemUrl}
          onChange={handleChange}
          className="form-input"
        /> <br />
        <input type="submit" value="Update Item" />
      </form>
    </div>
  )
}

export default WeddingEdit 
import { useState } from "react";
import {Link} from "react-router-dom"

function Index(props) {
  const [newForm, setNewForm] = useState({
    itemName: "",
    itemDescription: "",
    itemURL: "",
  });

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createHoliday(newForm);
    setNewForm({
        itemName: "",
        itemDescription: "",
        itemURL: "",
    });
  };

  const loaded = () => {
    return props.holiday.map((day) => (
      <div key={day._id} className="day">
        <Link to={`/hol-registry/${day._id}`}><h1>{day.itemName}</h1></Link>
        from
        <h3>{day.itemDescription}</h3>
        <p>{day.itemURL}</p>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.itemName}
          name="name"
          placeholder="name"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          value={newForm.itemDescription}
          name="Item Decription"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          value={newForm.itemURL}
          name="itemURL"
          placeholder="ItemURL"
          onChange={handleChange}
          className="form-input"
        />
        <input type="submit" value="Add Your gift" classname="button" />
      </form>
      {props.holiday ? loaded() : loading()}
    </section>
  );
}

export default Index;
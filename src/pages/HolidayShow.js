// Show.js
import { useState } from 'react';
import {Link} from "react-router-dom"


import React, { Component } from 'react'
import ApiModel from '../models/apimodel'




function HolidayShow(props) {
  
  const fetchData = () => {
    ApiModel.all().then(data => {
      this.setState({ api: data })
    })
  }





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
    props.createHolidayItem(newForm);
    setNewForm({
        itemName: "",
        itemDescription: "",
        itemUrl: "",
    });
  };

  const loaded = () => {
      return props.HolidayItem.map((item) => (
          <div key={item._id}>
              <ul>
                  <li>{item.itemName}</li>
                  <li>{item.itemDescription}</li>
                  <li>{item.itemUrl}</li>
                </ul>
        <Link to={`/hol-registry/${item._id}`}><button>EDIT</button></Link>
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
      <div>{this}</div>
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


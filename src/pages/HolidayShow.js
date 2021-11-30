// Show.js
import { useState } from 'react';
import {Link} from "react-router-dom";
import React, { Component } from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

function HolidayShow(props) {
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
      <div key={item._id} className="card">
          <ul className="list-group list-group-flush list-font">
              <li className="list-group-item">{item.itemName}</li>
              <li className="list-group-item">{item.itemDescription}</li>
              <a href={item.itemUrl}><li className="list-group-item">Go to {item.itemName} URL</li></a>
            </ul>
    <Link to={`/hol-registry/${item._id}`}><button className="logout-button">EDIT</button></Link>
  <button className="logout-button"id="delete" onClick={() => props.deleteHolidayItem(item._id)}>
    DELETE
  </button>
      </div>
  ))
}


const etsyCarousel = () => {
  const products = props.ApiResponse
  return (<><h3>Products from Etsys</h3>
          <MDBCarousel showControls showIndicators fade>
          <MDBCarouselInner>
            <MDBCarouselItem key={products[0].id} className='active'>
            <MDBCarouselElement src={products[0].image} alt="Product" />
            <MDBCarouselCaption>
            <a href={products[0].url}target="_blank" rel="noreferrer"><h5>{products[0].name}</h5></a>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem key={products[1].id}>
            <MDBCarouselElement src={products[1].image} alt="Product" />
            <MDBCarouselCaption>
            <a href={products[1].url}target="_blank" rel="noreferrer"><h5>{products[1].name}</h5></a>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem key={products[2].id}>
            <MDBCarouselElement src={products[2].image} alt="Product" />
            <MDBCarouselCaption>
            <a href={products[2].url}target="_blank" rel="noreferrer"><h5>{products[2].name}</h5></a>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem key={products[3].id}>
            <MDBCarouselElement src={products[3].image} alt="Product" />
            <MDBCarouselCaption>
            <a href={products[3].url}target="_blank" rel="noreferrer"><h5>{products[3].name}</h5></a>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem key={products[4].id}>
            <MDBCarouselElement src={products[4].image} alt="Product" />
            <MDBCarouselCaption>
            <a href={products[4].url}target="_blank" rel="noreferrer"><h5>{products[4].name}</h5></a>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem key={products[5].id}>
            <MDBCarouselElement src={products[5].image} alt="Product" />
            <MDBCarouselCaption>
            <a href={products[5].url}target="_blank" rel="noreferrer"><h5>{products[5].name}</h5></a>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem key={products[6].id}>
            <MDBCarouselElement src={products[6].image} alt="Product" />
            <MDBCarouselCaption>
            <a href={products[6].url}target="_blank" rel="noreferrer"><h5>{products[6].name}</h5></a>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem key={products[7].id}>
            <MDBCarouselElement src={products[7].image} alt="Product" />
            <MDBCarouselCaption>
            <a href={products[7].url}target="_blank" rel="noreferrer"><h5>{products[7].name}</h5></a>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem key={products[8].id}>
            <MDBCarouselElement src={products[8].image} alt="Product" />
            <MDBCarouselCaption>
            <a href={products[8].url}target="_blank" rel="noreferrer"><h5>{products[8].name}</h5></a>
            </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem key={products[9].id}>
            <MDBCarouselElement src={products[9].image} alt="Product" />
            <MDBCarouselCaption>
            <a href={products[9].url}target="_blank" rel="noreferrer"><h5>{products[9].name}</h5></a>
            </MDBCarouselCaption>
            </MDBCarouselItem>
        </MDBCarouselInner>
        </MDBCarousel>
        </>)
}

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <div className="spacing-form">
        <div className="overlap-content">
          <h3 className="form-label">What I want...</h3>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                value={newForm.itemName}
                name="itemName"
                placeholder="Enter Product"
                onChange={handleChange}
                className="form-control"
              />
              </div>
              <div className="mb-3">
                  <label for="ItemDescription" className="form-label">Item Description</label>
              <input
                type="text"
                value={newForm.itemDescription}
                name="itemDescription"
                placeholder="Item Description"
                onChange={handleChange}
                className="form-control"
              /></div>
              <div className="mb-3">
                  <label for="ItemURL" className="form-label">Item URL</label>
              <input
                type="text"
                value={newForm.itemUrl}
                name="itemUrl"
                placeholder="URL"
                onChange={handleChange}
                className="form-control"
              /></div>
              <input className="logout-button" type="submit" value="Add to your registry" />
            </form>
        </div>
      </div>
      <div className="row">
      <div className="col col-border col-left">{props.HolidayItem ? loaded() : loading()}</div>
      <div className="col col-border col-right">{props.ApiResponse? etsyCarousel() : loading()}</div>
      </div>
    </section>
  );


} 
    
export default HolidayShow
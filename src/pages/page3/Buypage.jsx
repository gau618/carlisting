import React from 'react'
import carImg from "../../assets/rr.jpg";
import "./Buypage.scss"
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {cars} from "../../Data/Data1"
import { useEffect } from 'react';
export default function Buypage() {
  const [carlist, setCarlist] = useState([]);
  const {id}=useParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        paymentMethod: '',
        termsAccepted: false,
      });
      useEffect(() => {
        const carsList = cars.filter((item) => Number(id) === item.carId);
        setCarlist(carsList[0]);
      }, [id]);
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      }
  return (
<>
  <div className="BuyPagecontainer">
  <div className="car-card">
      <div className="car-image">
        <img src={carImg} alt="Car" />
        <div className="favorite-icon">★</div>
      </div>
      <div className="car-details">
        <div className="car-header">
          <h2>{carlist.carname}</h2>
          <div className="car-price">${carlist.carprice}</div>
        </div>
        <p>Multiply and itself their good blessed also good whose, had two without.</p>
        <div className="car-specs">
          <div><strong>Year:</strong>{carlist.carmodel}</div>
          <div><strong>Mileage:</strong>{carlist.mileage}</div>
          <div><strong>Fuel:</strong> {carlist.carfuel}</div>
          <div><strong>Engine:</strong> {carlist. engine}</div>
          <div><strong>Horsepower:</strong>{carlist.horsepower}</div>
          <div><strong>Doors:</strong> {carlist.doors}</div>
          <div><strong>Color:</strong>{carlist.color}</div>
          <div><strong>Condition:</strong>{carlist.condition}</div>
        </div>
        <button className="compare-button">ADD TO COMPARE</button>
      </div>
    </div>
    <div className="carBuyForm">
    <form className="car-purchase-form" onSubmit={handleSubmit}>
      <h2>Buy {carlist.carname} {carlist.carmodel}</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="paymentMethod">Payment Method</label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bankTransfer">Bank Transfer</option>
        </select>
      </div>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          I accept the terms and conditions
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  </div>
</>
  )
}

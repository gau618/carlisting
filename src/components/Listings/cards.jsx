import React from 'react';
import cardimg from "../../assets/homeImg.jpg";
import { LuFuel } from "react-icons/lu";
import { BsCalendar2Date } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
import "./cards.scss";
import { useNavigate } from 'react-router-dom';

export default function Cards({ item }) {
  const Navigate=useNavigate();
  const navigatetodetails=()=>{
    Navigate(`/Listing/${item.carId}`);
  }
  return (
    <div className="cards" onClick={navigatetodetails}>
      <div className="cardImg">
        <img src={cardimg} alt="" />
        <div className="priceOverlay">
          ${item.carprice}
        </div>
      </div>
      <div className="carname">
        <p>{item.carname}</p>
      </div>
      <div className="description">
        <div className="model">
          <BsCalendar2Date />
          {item.carmodel}
        </div>
        <div className="model">
          <IoSpeedometerOutline />
          {item.caraveragekilometers} km
        </div>
        <div className="model">
          <LuFuel />
          {item.carfuel}
        </div>
      </div>
    </div>
  );
}

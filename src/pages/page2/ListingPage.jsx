import React, { useState, useEffect } from "react";
import img from "../../assets/r.png";
import "./ListingPage.scss";
import base from "../../assets/base.png";
import Carlisting from "../../components/Carlisting/Carlisting";
import { useParams } from "react-router-dom";

import { useCarContext } from "../../contextAPI";
export default function ListingPage() {
  const { filteredCars } = useCarContext();
  const [carlist, setCarlist] = useState([]);
  const { id } = useParams();
  console.log(filteredCars);
  useEffect(() => {
    const carsList = filteredCars.filter((item) => Number(id) === item.carId);
    setCarlist(carsList);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (carlist.length === 0) {
    return <div>Loading...</div>; // Optionally, add a loading state
  }

  return (
    <>
      <div className="Listingpagecontainer">
        <div className="listingpageImg">
          <img src={img} className="mainImg" alt="" />
          <img src={base} className="baseimg" alt="" />
          <div className="carnamebox">
            <h1>{carlist[0].carname}</h1>
          </div>
        </div>
        <Carlisting carlist={carlist[0]} />
      </div>
    </>
  );
}

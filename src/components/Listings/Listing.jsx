import React, { useState } from 'react';
import "./Listing.scss";
import { cars } from '../../Data/Data1';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Cards from './cards';
import { useCarContext } from '../../contextAPI';
export default function Listing() {
  const { filteredCars } = useCarContext();
  const [offset, setOffset] = useState(0);
  const cardWidth = 800; // Width of each card in pixels
  const totalCards = cars.length;
  const maxOffset = -(cardWidth * (totalCards - 1));

  const handlePrevClick = () => {
    setOffset((prevOffset) => 
      Math.min(prevOffset + cardWidth, 0)
    );
  };

  const handleNextClick = () => {
    setOffset((prevOffset) => 
      Math.max(prevOffset - cardWidth, maxOffset)
    );
  };

  return (
    <div className="listingContainer">
      <div className="topHeading">
        <div className="heading">
          <p>HELPS YOU TO FIND YOUR NEXT CAR EASILY</p>
          <h1>Featured <span>Vehicles</span></h1>
        </div>
        <div className="shifticons">
          <FaArrowLeft onClick={handlePrevClick} />
          <FaArrowRight onClick={handleNextClick} />
        </div>
      </div>
      <div className="listingCards">
        <div className="cardsWrapper" style={{ transform: `translateX(${offset}px)` }}>
          {filteredCars.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="allListing">
        <button>View all Cars</button>
      </div>
    </div>
  );
}

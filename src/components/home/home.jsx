import React from 'react';
import homephoto from "../../assets/rr.jpg";
import "./home.scss";
import icon from "../../assets/react.svg";
import bimage from "../../assets/car-min.png";
import { useCarContext } from '../../contextAPI';

export default function Home() {
  const {
    selectedCompany, setSelectedCompany,
    selectedModel, setSelectedModel,
    selectedPriceRange, setSelectedPriceRange,
    selectedFuelType, setSelectedFuelType,
    filteredCars, handleSearch
  } = useCarContext();

  const uniqueCompanies = [...new Set(filteredCars.map(car => car.carcompany))];
  const uniqueModels = [...new Set(filteredCars.map(car => car.carname))];
  const priceRanges = [
    { value: 'under_20000', label: 'Under $20,000' },
    { value: '20000_30000', label: '$20,000 - $30,000' },
    { value: '30000_40000', label: '$30,000 - $40,000' },
    { value: '40000_50000', label: '$40,000 - $50,000' },
    { value: 'over_50000', label: 'Over $50,000' }
  ];
  const uniqueFuelTypes = [...new Set(filteredCars.map(car => car.carfuel))];

  return (
    <div className="home">
      <div className="homeImg">
        <img src={homephoto} alt="" />
      </div>
      <div className="listingSorting">
        <div className="sort">
          <p>SELECT COMPANY</p>
          <select onChange={(e) => setSelectedCompany(e.target.value)}>
            <option value="">All</option>
            {uniqueCompanies.map(company => (
              <option key={company} value={company}>{company}</option>
            ))}
          </select>
        </div>
        <div className="sort">
          <p>SELECT A MODEL</p>
          <select onChange={(e) => setSelectedModel(e.target.value)}>
            <option value="">All</option>
            {uniqueModels.map(model => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </div>
        <div className="sort">
          <p>SELECT A PRICE RANGE</p>
          <select onChange={(e) => setSelectedPriceRange(e.target.value)}>
            <option value="">All</option>
            {priceRanges.map(range => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>
        </div>
        <div className="sort">
          <p>FUEL TYPE</p>
          <select onChange={(e) => setSelectedFuelType(e.target.value)}>
            <option value="">All</option>
            {uniqueFuelTypes.map(fuel => (
              <option key={fuel} value={fuel}>{fuel}</option>
            ))}
          </select>
        </div>
        <div className="sortbutton">
          <button onClick={handleSearch}>SEARCH</button>
        </div>
      </div>
      <div className="bottom-container">
        <div className="greeting">
          <p>HELPS YOU TO FIND YOUR NEXT CAR EASILY</p>
          <h1>Welcome to <span>AutoCar</span></h1>
        </div>
        <div className="bottomcards">
        <div className="cards">
            <img src={icon} alt="" />
            <h4>
              WE OFFERS LOWER <br />
              CARS PRICES
            </h4>
            <p>
              Fruitful seed female multiply lights blessed above Bearing in so
              two every together forth so can't seas darkness rule.
            </p>
          </div>
          <div className="cards">
            <img src={icon} alt="" />
            <h4>
              LARGEST CARS <br /> DEALERSHIP
            </h4>
            <p>
              Evening together evening given fill upon darkness, i were lesser
              first fly. Had divide him called seas first after night god.
            </p>
          </div>
          <div className="cards border">
            <img src={icon} alt="" />
            <h4>
              MULTIPOINT SAFETY <br />
              CHECKS OFFERS
            </h4>
            <p>
              Also sixth be replenish third our also their moving unto hath
              whales beginning unto set you'll us let above dry shall greater.
            </p>
          </div>
        </div>
        <div className="bottomImg">
          <img src={bimage} alt="" />
        </div>
      </div>
    </div>
  );
}


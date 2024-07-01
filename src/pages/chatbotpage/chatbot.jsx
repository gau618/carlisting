import React, { useState } from "react";
import { cars } from "../../Data/Data1";
import carImg from "../../assets/rr.jpg"
import { useNavigate } from "react-router-dom";
import "./chatbot.scss"
const Chatbot = () => {
  const Navigate=useNavigate();
  const [input, setInput] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const parseInput = (input) => {
    const lowerInput = input.toLowerCase();

    const extractNumber = (str) => {
      const match = str.match(/\d+/);
      return match ? parseInt(match[0], 10) : null;
    };

    const determineComparator = (input) => {
      if (/under|below|less than/.test(input)) return "under";
      if (/more than|over|above/.test(input)) return "over";
      return "at least";
    };

    const fields = {
      carprice: {
        value: extractNumber(lowerInput.match(/\$?\d+/)?.[0] || ""),
        comparator: determineComparator(lowerInput),
      },
      carcompany: [
        "toyota",
        "honda",
        "ford",
        "chevrolet",
        "nissan",
        "tesla",
        "jeep",
        "bmw",
        "audi",
        "mercedes",
      ].find((company) => lowerInput.includes(company)),
      carmodel:
        lowerInput.match(/(202[0-9]|201[0-9]|200[0-9]|19[0-9]{2})/)?.[0] ||
        null,
      carfuel: ["petrol", "gasoline", "diesel", "electric", "hybrid"].find(
        (fuel) => lowerInput.includes(fuel)
      ),
      caraveragekilometers: {
        value: extractNumber(lowerInput.match(/\d+km/)?.[0] || ""),
        comparator: determineComparator(lowerInput),
      },
      color: [
        "white",
        "black",
        "blue",
        "red",
        "gray",
        "silver",
        "yellow",
        "green",
        "gold",
        "brown",
      ].find((color) => lowerInput.includes(color)),
      condition: ["new", "like new", "semi old", "old", "used"].find((cond) =>
        lowerInput.includes(cond)
      ),
      interiorColor: ["white", "black", "gray", "beige", "brown"].find(
        (color) => lowerInput.includes(color)
      ),
      priceType: ["fixed", "negotiable"].find((priceType) =>
        lowerInput.includes(priceType)
      ),
      horsepower: {
        value: extractNumber(
          lowerInput.match(/\d+hp/)?.[0] ||
            lowerInput.match(/horsepower \d+/)?.[0] ||
            ""
        ),
        comparator: determineComparator(lowerInput),
      },
    };

    return fields;
  };

  const handleSearch = () => {
    const filters = parseInput(input);

    const results = cars.filter((car) => {
      return Object.keys(filters).every((field) => {
        if (!filters[field]) return true;

        if (
          field === "carprice" ||
          field === "caraveragekilometers" ||
          field === "horsepower"
        ) {
          if (filters[field].value === null) return true;

          const comparator = filters[field].comparator;
          if (comparator === "under") {
            return car[field] && car[field] < filters[field].value;
          } else if (comparator === "over") {
            return car[field] && car[field] > filters[field].value;
          } else {
            return car[field] && car[field] >= filters[field].value;
          }
        } else {
          return (
            car[field] &&
            car[field].toString().toLowerCase() ===
              filters[field].toString().toLowerCase()
          );
        }
      });
    });

    setFilteredCars(results);
  };

  return (
    <div className="Chatbotcontainer">
      <h1>Find Your <span>Dream Car</span></h1>
      <div className="serchcontainer">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Ask about cars..."
      />
      <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {filteredCars.length > 0 ? (
          filteredCars.map((carlist) => (
            <div className="BuyPagecontainer" >
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
                  <p>
                    Multiply and itself their good blessed also good whose, had
                    two without.
                  </p>
                  <div className="car-specs">
                    <div>
                      <strong>Year:</strong>
                      {carlist.carmodel}
                    </div>
                    <div>
                      <strong>Mileage:</strong>
                      {carlist.mileage}
                    </div>
                    <div>
                      <strong>Fuel:</strong> {carlist.carfuel}
                    </div>
                    <div>
                      <strong>Engine:</strong> {carlist.engine}
                    </div>
                    <div>
                      <strong>Horsepower:</strong>
                      {carlist.horsepower}
                    </div>
                    <div>
                      <strong>Doors:</strong> {carlist.doors}
                    </div>
                    <div>
                      <strong>Color:</strong>
                      {carlist.color}
                    </div>
                    <div>
                      <strong>Condition:</strong>
                      {carlist.condition}
                    </div>
                  </div>
                  <button className="compare-button" onClick={()=>{
                  Navigate(`/Buy/${carlist.carId}`)
                  }}>Buy</button>
                </div>
              </div>
              </div>
          ))
        ) : (
          <p>No cars found</p>
        )}
      </div>
    </div>
  );
};

export default Chatbot;

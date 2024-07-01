import React, { useState, createContext, useContext } from 'react';
import { cars } from './Data/Data1';

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedFuelType, setSelectedFuelType] = useState('');
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleSearch = () => {
    console.log("Filters Applied: ", {
      selectedCompany,
      selectedModel,
      selectedPriceRange,
      selectedFuelType
    });

    const filtered = cars.filter(car => {
      return (
        (selectedCompany === '' || car.carcompany === selectedCompany) &&
        (selectedModel === '' || car.carname === selectedModel) &&
        (selectedPriceRange === '' || (
          (selectedPriceRange === 'under_20000' && car.carprice < 20000) ||
          (selectedPriceRange === '20000_30000' && car.carprice >= 20000 && car.carprice <= 30000) ||
          (selectedPriceRange === '30000_40000' && car.carprice > 30000 && car.carprice <= 40000) ||
          (selectedPriceRange === '40000_50000' && car.carprice > 40000 && car.carprice <= 50000) ||
          (selectedPriceRange === 'over_50000' && car.carprice > 50000)
        )) &&
        (selectedFuelType === '' || car.carfuel === selectedFuelType)
      );
    });

    console.log("Filtered Cars: ", filtered);
    setFilteredCars(filtered);
  };

  const value = {
    selectedCompany, setSelectedCompany,
    selectedModel, setSelectedModel,
    selectedPriceRange, setSelectedPriceRange,
    selectedFuelType, setSelectedFuelType,
    filteredCars, handleSearch
  };

  return (
    <CarContext.Provider value={value}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => {
  return useContext(CarContext);
};

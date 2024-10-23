import React, { useState, useEffect } from "react";
import MapView from "./components/MapView";
import Sidebar from "./components/Sidebar";
import "./App.css"

const initialState = {lat:'25.07058700020862',lng:'84.87927065270105',address:{ ISO3166_2_lvl4: "IN-BR",
  country: "India",
  country_code: "in",
  county: "Ratni Faridpur",
  postcode: "804433",
  state: "Bihar",
  state_district: "Jehanabad"},remark:"my location"}

function App() {
  const [pins, setPins] = useState(JSON.parse(localStorage.getItem("pins")) || [initialState]);
  const [selectedPin, setSelectedPin] = useState(null);


  useEffect(() => {
    localStorage.setItem("pins", JSON.stringify(pins));
  }, [pins]);

  const addPin = (pin) => {
    setPins([...pins, pin]);
  };

  const removePin = (index) => {
    setPins(pins.filter((_, i) => i !== index));
  };

  const handlePinClick = (pin) => {
    setSelectedPin(pin);
  };

  return (
    <div className="app-container">
      <MapView pins={pins} addPin={addPin} selectedPin={selectedPin}/>
      <Sidebar pins={pins} removePin={removePin} onPinClick={handlePinClick}/>
    </div>
  );
}

export default App;

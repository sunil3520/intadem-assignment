import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css"

function PinForm({ position,setPosition, addPin }) {
  const [remark, setRemark] = useState("");
  const [address, setAddress] = useState("");
  const [loading,setLoading] =useState(true);

  useEffect(() => {
    async function fetchAddress() {
      const { lat, lng } = position;
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
        console.log(response.data,'res')
        setAddress(response.data.address || "Address not found");
        setLoading(false);
      } catch (error) {
        console.log('Not able to fetch address')
      }
    }
    fetchAddress();
  }, [position]);


  const handleSubmit = (e) => {
    e.preventDefault();
    addPin({ lat: position.lat, lng: position.lng, remark, address });
    setRemark(""); 
    setPosition(null);
    
  };


  return (
    <div className="pin-form">
      <form onSubmit={handleSubmit}>
        <label>
          Remark:
          <input
          className="input"
            type="text"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            placeholder="Enter remark here..."
          />
        </label>
        <div>
          <strong>Address:</strong> {loading? "Fetching details...":`${(address.amenity  && address.amenity) || (address.village && address.village) || address.county}, ${(address.country && address.country)} ,${(address.postcode && address.postcode)}`}
        </div>
        
        <button type="submit">Save Pin</button>
      </form>
    </div>
  );
}

export default PinForm;

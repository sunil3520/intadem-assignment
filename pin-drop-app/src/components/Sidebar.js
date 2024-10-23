import React from "react";

function Sidebar({ pins, removePin ,onPinClick}) {
  let updatePins =[...pins].reverse();
  
  return (
    <div className="sidebar">
      <h3>Saved Pins</h3>
      <ul>
        {updatePins.map((pin, index) => (
          <li key={index}>
            <strong>Remark:</strong> {pin.remark} <br />
            <strong>Address:</strong> {`${pin.address?.amenity || pin.address?.village || pin.address?.county}, ${pin.address?.country} ,${pin.address?.postcode}`} <br />
            <button onClick={() => onPinClick(pin)}>Visit location🚂</button>
            <button onClick={() => removePin(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

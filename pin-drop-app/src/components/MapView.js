import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import PinForm from "./RemarkForm";
import "leaflet/dist/leaflet.css";
import "../App.css"
import RedirectToLocation from "../utils/RedirectToLocation"
import MapClickHandler from "../utils/MapClickHandler";

L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
});


function MapView({ pins, addPin, selectedPin }) {
    const [position, setPosition] = useState(null);

    return (
        <div className="map-container">
            {position && <PinForm position={position} addPin={addPin} />}

            <MapContainer

                center={[25.07058700020862, 84.87927065270105]} zoom={7} scrollWheelZoom={false} style={{ height: "100vh", width: "70vw" }}>
                <MapClickHandler setPosition={setPosition} />
                <RedirectToLocation selectedPin={selectedPin} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />


                {

                    pins.map((el, i) => {
                        return <Marker
                            eventHandlers={{
                                click: (e) => {
                                    console.log(e.latlng)

                                },
                            }}
                            key={i + 1} position={{ lat: el.lat, lng: el.lng }}>
                            <Tooltip>{`${el.address.amenity || el.address.village || el.address.county}, ${el.address.country} ,${el.address.postcode}`}
                            </Tooltip>
                            <Popup>
                                {`${el.address.amenity || el.address.village || el.address.county}, ${el.address.country} ,${el.address.postcode}`}
                            </Popup>
                        </Marker>
                    })
                }


            </MapContainer>
        </div>

    );
}

export default MapView;

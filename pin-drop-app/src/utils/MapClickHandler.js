import { useMapEvents } from "react-leaflet";

const MapClickHandler = ({setPosition}) => {
    useMapEvents({
        click(e) {
            setPosition(e.latlng);
        },

    });
    return null;
};

export default MapClickHandler
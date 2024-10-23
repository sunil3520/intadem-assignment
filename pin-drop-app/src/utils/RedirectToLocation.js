import { useEffect } from "react";
import { useMap } from "react-leaflet";

function RedirectToLocation({ selectedPin }) {
    const map = useMap();

    useEffect(() => {
        if (selectedPin) {
            const { lat, lng } = selectedPin;
            map.flyTo([lat, lng], 13);
        }
    }, [selectedPin]);

    return null;
}


export default RedirectToLocation;
import React from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={8}
        center={{ lat: 49.005167, lng: 2.113702 }}
    >
        <Marker
            position={{ lat: 49.005167, lng: 2.113702 }}
        />
    </GoogleMap>
));

export default MapWithAMarker;

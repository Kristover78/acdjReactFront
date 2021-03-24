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
        defaultCenter={{ lat: 49.009162, lng: 2.09739 }}
    >
        <Marker
            position={{ lat: 49.009162, lng: 2.09739 }}
        />
    </GoogleMap>
));

export default MapWithAMarker;

import React from "react";
import GoogleMapReact from "google-map-react";
import { Marker } from "google-maps-react";

const GoogleMap = ({ lat, lng, zoom }) => {
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: zoom || 15,
  };

  return (
    <div style={{ height: "260px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC1SKfM0hkWaDGNv0O4Q2lXXrZ1HO2Nl2c" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;

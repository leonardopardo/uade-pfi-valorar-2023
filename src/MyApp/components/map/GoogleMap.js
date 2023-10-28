import React from "react";
import GoogleMapReact from "google-map-react";

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
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMap;

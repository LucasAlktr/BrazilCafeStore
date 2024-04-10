import React, { useEffect } from "react";

const GoogleMapsAPI = () => {
  useEffect(() => {
    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 42.9835090637207, lng: -81.2509994506836 },
        zoom: 14,
      });
      new window.google.maps.Marker({
        position: { lat: 42.9835090637207, lng: -81.2509994506836 },
        map,
        title: "Location",
      });
    };

    if (!window.google || !window.google.maps) {
      const script = document.createElement("script");
      document.body.appendChild(script);
    } else {
      window.initMap();
    }
  }, []);
  return (
    <div
      id="map"
      style={{
        width: "70%",
        height: "400px",
        margin: "0 auto",
      }}
    ></div>
  );
};

export default GoogleMapsAPI;

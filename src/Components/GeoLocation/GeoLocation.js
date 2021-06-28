//! Note: used Geolocation db API for getting location

//* Imports and Dependencies
import React, { useState, useEffect } from "react";

const GeoLocation = () => {
  const [location, setLocation] = useState(null);

  const fetchLocation = () => {
    fetch(
      `https://geolocation-db.com/json/e4f42070-ad2d-11eb-adf1-cf51da9b3410`
    )
      .then((res) => res.json())
      .then((data) => setLocation(data));
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className="text-white mx-3">
      {location ? (
        <small>
          {" "}
          Delivery to <b> {location.city}</b>
        </small>
      ) : (
        <small>
          {" "}
          Delivery to <b> not specified</b>
        </small>
      )}
    </div>
  );
};

export default GeoLocation;

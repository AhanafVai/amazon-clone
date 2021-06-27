import React from "react";
import { useEffect } from "react";
import { useState } from "react";

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
    <div className="text-white px-4">
      {location ? (
        <p>
          {" "}
          <small> Delivery to</small> <br /> <b> {location.city}</b>
        </p>
      ) : (
        <p>
          Delivery to:
          <br />
          Not Specified
        </p>
      )}
    </div>
  );
};

export default GeoLocation;

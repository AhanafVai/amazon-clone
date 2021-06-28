//! Note: used Geolocation db API for getting location

//* Imports and Dependencies
import React, { useEffect, useState } from "react";

const DeliveryLocation = () => {
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
    <>
      {location ? (
        <div>
          <span>
            {" "}
            {location.city},{location.country_name}{" "}
          </span>
          <br />
          <span>Postal: {location.postal} </span>
        </div>
      ) : (
        <div>
          <span>
            Sorry, we are facing some technical difficulties try again later.
          </span>
        </div>
      )}
    </>
  );
};

export default DeliveryLocation;

import React, { useEffect, useState } from "react";

const Inventory = () => {
  const [data, setData] = useState("");

  const fetchProducts = () => {
    fetch(``)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProducts = () => {
    fetch(`http://localhost:5000/addProducts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("baicha gesos mama");
        }
      });
  };

  return (
    <div>
      <button onClick={handleAddProducts}>Add products</button>
    </div>
  );
};

export default Inventory;

import React from "react";
import fakeData from "../../../fakeData";
import AddProduct from "./AddProduct";
import AdminBar from "../Shared/AdminBar";

const Inventory = () => {
  //? Use this to send data from 3rd party API
  // const [data, setData] = useState("");

  // const fetchProducts = () => {
  //   fetch(``)
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const handleAddProducts = () => {
  //   fetch(`https://hidden-reef-73681.herokuapp.com/addProducts`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data) {
  //         alert("baicha gesos mama");
  //       }
  //     });
  // };

  //? Using to send fake data (Bulk)
  const handleAddProducts = () => {
    fetch(`https://hidden-reef-73681.herokuapp.com/addItems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeData),
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
      <AdminBar />
      <AddProduct handleAddProducts={handleAddProducts} />
    </div>
  );
};

export default Inventory;

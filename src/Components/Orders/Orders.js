import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import OrderContainer from "./OrderContainer";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/getOrder?email=" + currentUser.email)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="row d-flex justify-content-center">
      {orders.map((order) => (
        <OrderContainer key={order._id} order={order} />
      ))}
    </div>
  );
};

export default Orders;

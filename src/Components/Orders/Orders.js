import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import OrderContainer from "./OrderContainer";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      "https://hidden-reef-73681.herokuapp.com/getOrder?email=" +
        currentUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="row mx-auto">
      {orders.map((order) => (
        <OrderContainer key={order._id} order={order} />
      ))}
    </div>
  );
};

export default Orders;

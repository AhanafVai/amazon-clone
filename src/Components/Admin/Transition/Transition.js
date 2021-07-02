import React, { useEffect, useState } from "react";
import AdminBar from "../Shared/AdminBar";
import { FaTrash } from "react-icons/fa";

const Transition = () => {
  //? State
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getAllOrder")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <>
      <AdminBar />
      <table className="table  table-striped ">
        <thead>
          <tr>
            <th className="text-secondary text-left" scope="col">
              No
            </th>

            <th className="text-secondary" scope="col">
              Email ID
            </th>

            <th className="text-secondary" scope="col">
              Paid
            </th>

            <th className="text-secondary" scope="col">
              Order status
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr>
              <td>{index + 1}</td>

              <td>{order.email}</td>

              <td>{order.totalPrice}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Transition;

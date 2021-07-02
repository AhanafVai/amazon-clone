import React from "react";
import { useForm } from "react-hook-form";
import AdminBar from "../Shared/AdminBar";

const Admins = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const adminInfo = {
      email: data.email,
    };

    fetch("https://hidden-reef-73681.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminInfo),
    }).then((res) => {
      if (res) {
        alert("Welcome new admin");
      }
    });
  };
  return (
    <>
      <AdminBar />
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card"
          style={{ maxWidth: "50rem" }}
        >
          <h4 className="text-center pt-3">Make Admin</h4>
          <div className="card-body">
            <input
              type="email"
              className="form-control my-2"
              placeholder="Admin email"
              {...register("email")}
            />

            <button className="btn btn-warning " type="submit">
              Make Admin
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Admins;

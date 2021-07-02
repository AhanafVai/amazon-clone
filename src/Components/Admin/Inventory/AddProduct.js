import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = ({ handleAddProducts }) => {
  //? State
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const productData = {
      id: data.id,
      title: data.title,
      price: data.price,
      description: data.description,
      category: data.category,
      image: imageURL,
    };

    fetch("https://hidden-reef-73681.herokuapp.com/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    }).then((res) => {
      if (res) {
        alert("Product added");
      }
    });
  };

  //? post & get Image from imageBB
  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "69ee8e3dd464f45460eada435d7d8652");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card"
        style={{ maxWidth: "50rem" }}
      >
        <h4 className="text-center pt-3">Update Product</h4>
        <div className="card-body">
          <input
            type="text"
            className="form-control my-2"
            placeholder="Product id"
            {...register("id")}
          />
          <input
            type="text"
            className="form-control my-2"
            placeholder="Product title"
            {...register("title")}
          />
          <input
            type="number"
            className="form-control my-2"
            placeholder="Product price"
            {...register("price")}
          />
          <input
            type="text"
            className="form-control my-2"
            placeholder="Product description"
            {...register("description")}
          />
          <input
            type="text"
            className="form-control my-2"
            placeholder="Product category"
            {...register("category")}
          />
          <input
            type="file"
            className="form-control my-2"
            aria-label="file example"
            required
            onChange={handleImageUpload}
          />

          <button className="btn btn-warning " type="submit">
            Add Product
          </button>
        </div>
        <button className="btn btn-warning" onClick={handleAddProducts}>
          Fill the store
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

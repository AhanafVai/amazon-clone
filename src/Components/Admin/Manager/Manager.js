import React, { useEffect, useState } from "react";
import AdminBar from "../Shared/AdminBar";

const Manager = () => {
  const [products, setProducts] = useState([]);
  const [loadProduct, setLoadProduct] = useState({});

  useEffect(() => {
    fetch("https://hidden-reef-73681.herokuapp.com/getProductsManager")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const loadProducts = (id) => {
    fetch(`https://hidden-reef-73681.herokuapp.com/getProductManager/${id}`)
      .then((res) => res.json())
      .then((data) => setLoadProduct(data));
  };

  const updateProduct = (id) => {
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const update = { id, price, category };

    fetch(`https://hidden-reef-73681.herokuapp.com/updateProduct/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Product Updated");
        }
      });
  };

  const deleteProduct = (id) => {
    fetch(`https://hidden-reef-73681.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Product Deleted");
        }
      });
  };

  return (
    <>
      <AdminBar />
      {/* Reading & Updating section */}
      <form className="card" style={{ maxWidth: "50rem" }}>
        <h4 className="text-center pt-3">Add Product</h4>
        <div className="card-body">
          <input
            defaultValue={loadProduct.title}
            type="text"
            className="form-control my-2"
            placeholder="Product Title"
          />
          <input
            defaultValue={loadProduct.price}
            type="number"
            className="form-control my-2"
            placeholder="Product Price"
            id="price"
          />
          <input
            defaultValue={loadProduct.category}
            type="text"
            className="form-control my-2"
            placeholder="Product Category"
            id="category"
          />

          <button
            onClick={() => updateProduct(loadProduct._id)}
            className="btn btn-warning"
            type="button"
          >
            Confirm Update
          </button>
        </div>
      </form>
      {/* Reading & Updating section */}
      <div style={{ width: "50rem" }} className="mx-auto p-5">
        <table className="table  table-striped">
          <thead>
            <tr>
              <th className="text-secondary text-left" scope="col">
                No
              </th>

              <th className="text-secondary" scope="col">
                Title
              </th>

              <th className="text-secondary" scope="col">
                Price
              </th>

              <th className="text-secondary" scope="col">
                category
              </th>

              <th className="text-secondary" scope="col">
                Management
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>

                <td>{product.title}</td>

                <td>{product.price}</td>
                <td> {product.category}</td>
                <td className="d-flex">
                  <button
                    className="btn btn-light mx-2"
                    onClick={() => loadProducts(product._id)}
                  >
                    update
                  </button>
                  <button
                    className="btn btn-light"
                    onClick={() => deleteProduct(product._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Manager;

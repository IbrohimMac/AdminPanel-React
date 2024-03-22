import React, { useEffect, useState } from "react";
import "../../scss/Add.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar/Sidebar";
const Add = ({ user }) => {
  const [post, setPost] = useState([
    {
      id: "",
      brand: "",
      price: "",
      discountPercentage: "",
    },
  ]);

  const addNew = async () => {
    try {
      const response = await axios.post("http://localhost:3000/products", post);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <main className="addMain">
        <Sidebar />
        <section className="sec1">
          <h1>Новый товар</h1>
          <p>Главная / Товары / Новый товар</p>
        </section>
        <section className="sec2">
          <div className="all-inputs">
            <div className="inline-inputs">
              <label
                id="named"
                className="inp-name mb-2 text-center justify-content-center mt-5"
              >
                <p>Название *</p>
              </label>
              <input
                type="id"
                id="id"
                className="form-control w-75 mb-3"
                required
                onChange={(e) => setPost({ ...post, id: e.target.value })}
                value={post.id}
                name="id"
              />

              <div className="brand">
                <label className="mb-3">Бренд *</label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  className="form-control"
                  required
                  onChange={(e) => setPost({ ...post, brand: e.target.value })}
                  value={post.brand}
                />
              </div>
              <div
                id="cent"
                className="inp-price-others d-flex justify-content-between mb-4 "
              >
                <div>
                  <label className="mb-2">Цена</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setPost({ ...post, price: e.target.value })
                    }
                    value={post.price}
                  />
                </div>
              </div>

              <div className="inp-price-others d-flex justify-content-between mb-5">
                <div>
                  <label className="mb-2 mt-4">Цена со скидкой</label>
                  <input
                    type="number"
                    name="discountPercentage"
                    id="discountPercentage"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setPost({ ...post, discountPercentage: e.target.value })
                    }
                    value={post.discountPercentage}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="buts">
            <Link to="/">
              <button className="but1" type="submit" onClick={addNew}>
                Save
              </button>
            </Link>
            <Link to="/">
              <button className="but1">Cancel</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Add;

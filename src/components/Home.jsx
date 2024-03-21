import React, { useEffect, useState } from "react";
import "../../scss/Home.scss";
import { Link } from "react-router-dom";
// import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import i1 from "../../public/nav1.svg";
import i2 from "../../public/nav2.svg";
import i3 from "../../public/nav3.svg";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        const Data = await res.json();
        setProducts(Data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="big">
        <div className="mini1">
          <Link to="/">
            <img src={i1} alt="" />
          </Link>
          <Link to="/">
            <div className="nav-i">
              <img src={i2} alt="" />
            </div>
          </Link>
          <Link to="/Add">
            <div className="nav-i">
              <img src={i3} alt="" />
            </div>
          </Link>
        </div>
        <div className="mini2">
          <main>
            <section className="s1">
              <h1>Товары</h1>
              <p>Главная / Товары</p>
            </section>
            <section className="s2">
              <table className="table">
                <div className="tab-in">
                  <h1>Все товары (5)</h1>
                  <input type="search" placeholder="Поиск" />
                </div>
                <tbody>
                  <thead>
                    <tr>
                      <div className="pro">
                        <th className="th1">Наименование</th>
                        <th className="th2">Бренд</th>
                        <th className="th3">Цена</th>
                        <th className="th4">Цена со скидкой</th>
                      </div>
                    </tr>
                  </thead>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      {products.length > 0 && (
                        <>
                          {products.map((product) => (
                            <div className="produ">
                              <td className="td1">Товар : {product.id}</td>
                              <td className="td2">{product.brand}</td>
                              <td className="td3">{product.price}</td>
                              <td className="td4">
                                {product.discountPercentage}
                              </td>
                            </div>
                          ))}
                        </>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
              <Link to="/Add">
                <button className="s2AddBut">+ Новый товар</button>
              </Link>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;

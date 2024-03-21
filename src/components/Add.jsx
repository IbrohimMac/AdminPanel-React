import React from "react";
import "../../scss/Add.scss";
import { Link } from "react-router-dom";

import i1 from "../../public/nav1.svg";
import i2 from "../../public/nav2.svg";
import i3 from "../../public/nav3.svg";
const Add = () => {
  return (
    <>
      <div className="admin">
        <div className="min1">
          <Link to="/">
            <img src={i1} alt="" />
          </Link>
          <Link to="/">
            <img className="navb-i" src={i2} alt="" />
          </Link>
          <Link to="/Add">
            <img className="navb-i" src={i3} alt="" />
          </Link>
        </div>
        <div className="min2">
          <main>
            <section className="se1">
              <h1>Новый товар</h1>
              <p>Главная / Товары / Новый товар</p>
            </section>
            <section className="se2">
              <div className="se2In">
                <button>Основные</button>
                <form>
                  <div className="name1">
                    <label htmlFor="name">Название *</label>
                    <input type="name" id="name" placeholder="Name" required />
                  </div>
                  <div className="name2">
                    <label htmlFor="brand">Бренд * </label>
                    <input
                      type="brand"
                      id="brand"
                      placeholder="Brand.."
                      required
                    />
                  </div>
                  <div className="price">
                    <div className="name3">
                      <label htmlFor="number"> Цена </label>
                      <input
                        type="number"
                        id="pricnumbere"
                        placeholder="$$$"
                        required
                      />
                    </div>
                    <div className="name3">
                      <label htmlFor="number">Цена со скидкой</label>
                      <input
                        type="number"
                        id="number"
                        placeholder="$$$"
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="se2End">
                <div className="endButs">
                  <button className="b1">Сохранить</button>
                  <button className="b2">Отмена</button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Add;

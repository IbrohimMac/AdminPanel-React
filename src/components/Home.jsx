import React, { useEffect, useState } from "react";
import "../../scss/Home.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import Sidebar from "../components/Sidebar/Sidebar";
import axios from "axios";
import RiseLoader from "react-spinners/RiseLoader";
import Button from "react-bootstrap/Button";

const Home = ({}) => {
  ///////// LOADER /////////////
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  /////////////

  const [panel, setPanel] = useState([]);

  /////////// DELETE ////////////////////

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:3000/products");
    setPanel(response.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3000/products/${id}`);
    fetchItems();
  };
  //////////////////////////

  //////////////////////////  Search /////////////////////////
  const [search, setSearch] = useState("");
  ////////////////////////////////

  useEffect(() => {
    const fetchPanel = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        const Data = await res.json();
        setPanel(Data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPanel();
  }, []);

  return (
    <div>
      {loading ? (
        <RiseLoader
          className="loader"
          color={"#36d7b7"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="big">
          <Sidebar />
          <div className="mini2">
            <main>
              <section className="s1">
                <h1>Товары</h1>
                <p>Главная / Товары</p>
              </section>
              <section className="s2">
                <div className="s2Big">
                  <div className="bigFl">
                    <h1>Все товары ({panel.length}) </h1>
                    <input
                      type="search"
                      placeholder="Поиск"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <div className="tab">
                    <table className="table table-striped table-hover p-4">
                      <thead>
                        <tr>
                          <th scope="col">Наименование</th>
                          <th scope="col">Бренд</th>
                          <th scope="col">Цена</th>
                          <th scope="col">Цена со скидкой</th>
                          <td scope="col">Edit / Delete</td>
                        </tr>
                      </thead>
                      {panel.length > 0 && (
                        <tbody>
                          {panel
                            //  .filter((panel) => panel.id.toLowerCase(search.toLowerCase()) )
                            .filter(
                              (panel) =>
                                panel.id
                                  .toLowerCase()
                                  .includes(search.toLowerCase()) ||
                                panel.brand
                                  .toLowerCase()
                                  .includes(search.toLowerCase())
                            )
                            .map((panel) => (
                              <>
                                <tr>
                                  <th className="text-start">
                                    Товар: {panel.id}
                                  </th>
                                  <th className="fw-normal">{panel.brand}</th>
                                  <th className="fw-normal">{panel.price}</th>
                                  <th className="fw-normal">
                                    {panel.discountPercentage}
                                  </th>

                                  <th>
                                    <div className="d-flex gap-3">
                                      <FiEdit />
                                      <RiDeleteBin2Line
                                        className="iconCU"
                                        onClick={() =>
                                          confirm(" Are you sure Delete?")
                                            ? deleteItem(panel.id)
                                            : false
                                        }
                                      />
                                    </div>
                                  </th>
                                </tr>
                              </>
                            ))}
                        </tbody>
                      )}
                    </table>
                  </div>
                </div>
                <Link to="/Add">
                  <Button variant="primary" className="btn btn-success mt-5 ">
                    + Новый товар
                  </Button>
                </Link>
              </section>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

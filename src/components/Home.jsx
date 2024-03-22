import React, { useEffect, useState } from "react";
import "../../scss/Home.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import Sidebar from "../components/Sidebar/Sidebar";

import axios from "axios";
///// MODAL /////
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
/////

const Home = ({}) => {
  /// MODAL //////
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // ///
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

  const [searchTerm, setSearchTerm] = useState("");
  ////////////////////////////////

  ////////////////////////// ADD ////////////////////

  //////////////////////////

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
                    onChange={(e) => setSearchTerm(e.target.value)}
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
                          .filter((panel) =>
                            panel.brand
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
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
              <Button
                variant="primary"
                onClick={handleShow}
                className="btn btn-success mt-5 "
              >
                + Новый товар
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Наименование</Form.Label>
                      <Form.Control
                        type="id"
                        placeholder="1 2 3 ..."
                        autoFocus
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Бренд *</Form.Label>
                      <Form.Control
                        type="brand"
                        placeholder="Apple / Huawei"
                        autoFocus
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Цена</Form.Label>
                      <Form.Control
                        as="input"
                        type="price"
                        rows={3}
                        placeholder="$$$"
                        required
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Цена со скидкой</Form.Label>
                      <Form.Control
                        as="input"
                        type="discountPercentage"
                        rows={3}
                        placeholder="$$"
                        required
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save
                  </Button>
                </Modal.Footer>
              </Modal>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import "../../scss/Home.scss";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import Sidebar from "../components/Sidebar/Sidebar";

///// MODAL /////
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

/////

const Home = ({ addContact }) => {
  /// ADD ////
  const [parce, setParce] = useState({
    title: "",
    brand: "",
    price: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    addContact(parce);
    setParce({
      title: "",
      brand: "",
      price: "",
    });
  };
  ////

  /// MODAL //////
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  ///
  const [panel, setPanel] = useState([]);

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
                  <input type="search" placeholder="Поиск" />
                </div>
                <div className="tab">
                  <table className="table table-striped table-hover p-4">
                    <thead>
                      <tr>
                        <th scope="col">Наименование</th>
                        <th scope="col">Бренд</th>
                        <th scope="col">Цена</th>
                        <th scope="col">Цена со скидкой</th>
                      </tr>
                    </thead>
                    <tbody>
                      {panel.length > 0 && (
                        <>
                          {panel.map((panel) => (
                            <tr>
                              <th className="text-start"> {panel.title}</th>
                              <th className="fw-normal">{panel.brand}</th>
                              <th className="fw-normal">{panel.price}</th>
                              <th className="fw-normal">
                                {panel.discountPercentage}
                              </th>
                              <th>
                                <div className="d-flex gap-3">
                                  <FiEdit />
                                  <RiDeleteBin2Line />
                                </div>
                              </th>
                              {/* <th>
                              </th> */}
                            </tr>
                          ))}
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <Button
                variant="primary"
                onClick={handleShow}
                className="s2AddBut"
              >
                + Новый товар
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={onSubmit}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Наименование</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Iphone / Samsung"
                        autoFocus
                        value={parce.name}
                        onChange={(e) =>
                          setParce({ ...parce, name: e.target.value })
                        }
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
                        value={parce.brand}
                        onChange={(e) =>
                          setParce({ ...parce, brand: e.target.value })
                        }
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Цена</Form.Label>
                      <Form.Control
                        as="input"
                        type="number"
                        rows={3}
                        value={parce.number}
                        placeholder="$$$"
                        onChange={(e) =>
                          setParce({ ...parce, number: e.target.value })
                        }
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Цена со скидкой</Form.Label>
                      <Form.Control
                        as="input"
                        type="num"
                        rows={3}
                        value={parce.num}
                        placeholder="$$"
                        onChange={(e) =>
                          setParce({ ...parce, num: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
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

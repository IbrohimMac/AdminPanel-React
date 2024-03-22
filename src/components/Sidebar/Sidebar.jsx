import React, { useState } from "react";
import "../../../scss/Sidebar.scss";
import { Link } from "react-router-dom";
import i1 from "../../../public/nav1.svg";
import i2 from "../../../public/nav2.svg";
import i3 from "../../../public/nav3.svg";
//
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
//
const sidebar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="sidebar">
        <Link to="/">
          <img src={i1} alt="" />
        </Link>
        <Link to="/">
          <div className="nav-i">
            <img src={i2} alt="" />
          </div>
        </Link>
        <div className="nav-i">
          <img variant="primary" onClick={handleShow} src={i3} alt="" />
        </div>
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
                  type="number"
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
                  type="number"
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
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default sidebar;

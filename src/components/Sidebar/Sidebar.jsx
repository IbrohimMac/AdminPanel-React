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
        <Link to="/Add">
          <div className="nav-i">
            <img variant="primary" src={i3} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default sidebar;

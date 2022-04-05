import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import camera from "../assets/camera.svg";

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="Intagram" />
        </Link>
        <Link to="/new">
          <img src={camera} alt="Eviar publicação" />
        </Link>
      </div>
    </header>
  );
}

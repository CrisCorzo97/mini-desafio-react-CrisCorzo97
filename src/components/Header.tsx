import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../css/Header.css";

const Header = () => {
  const [show, setShow] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-info" to="/">
          Inicio
        </NavLink>
        <button
          className="navbar-toggler border border-info text-info"
          onClick={() => setShow(!show)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            show
              ? "collapse navbar-collapse active"
              : "collapse navbar-collapse"
          }
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/students">
                Estudiantes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/form">
                Formulario
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;

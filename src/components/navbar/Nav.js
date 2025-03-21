import React, { useState } from 'react';
import { useAppContext } from "../../AppContext";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const { setActiveSection } = useAppContext();

  return (
    <nav>
      <div className="nav-center">

        <div className="nav-header">
          <img src="./csic.png" className="logo" alt="logo" />
          <button className="nav-toggle" onClick={() => setToggle(!toggle)}>
            <i className="fas fa-bars"></i>
          </button>
          <img src="./logo.png" className="logo" alt="logo" />
          <button className="nav-toggle" onClick={() => setToggle(!toggle)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>


        <ul className={`links ${toggle ? "show-links" : ""}`}>
          <li onClick={() => setActiveSection("inicio")}><a href="# "><strong>Inicio</strong></a></li>
          <li onClick={() => setActiveSection("resumen")}><a href="# "><strong>Resumen</strong></a></li>
          <li onClick={() => setActiveSection("documentacion")}><a href="# "><strong>Documentación</strong></a></li>
          <li onClick={() => setActiveSection("fotos")}><a href="# "><strong>Fotos / Datos</strong></a></li>
          <li onClick={() => setActiveSection("software")}><a href="# "><strong>Software</strong></a></li>
          <li onClick={() => setActiveSection("application")}><a href="# "><strong>Aplicación</strong></a></li>
        </ul>

        <ul className="social-icons">
          <li>
            <a target="_blank" href="https://www.github.com/curioustushar">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.twitter.com/curioustushar">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://stackoverflow.com/users/2224265/tushar-gupta-curioustushar">
              <i className="fab fa-stack-overflow"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/curioustushar/">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.freecodecamp.com/curioustushar">
              <i className="fab fa-free-code-camp"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.hackerrank.com/curioustushar">
              <i className="fab fa-hackerrank"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
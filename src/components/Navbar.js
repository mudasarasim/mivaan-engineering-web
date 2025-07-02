// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Mivaan General", path: "/mivaan-general" },
    { name: "Mivaan Contracting", path: "/mivaan-contracting" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <h2>Mivaan Engineering</h2>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {links.map(({ name, path }) => (
            <li className="nav-item" key={name}>
              <Link className="nav-link text-capitalize fw-semibold" style={{ fontSize: '15px' }} to={path}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

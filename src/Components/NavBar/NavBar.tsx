import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark ml-auto">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a href="/" className="navbar-brand">
          OpenAIS
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="navbar-item">
              <NavLink
                className="nav-link"
                to="/selectairports"
                activeClassName="active"
              >
                Select Airports
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                className="nav-link"
                to="/showweather"
                activeClassName="active"
              >
                Show Weather
              </NavLink>
            </li>
            <li className="navbar-item">
              <a className="nav-link" href="/">
                More Information
              </a>
            </li>
          </ul>
          <span className="navbar-text">Sign In</span>
        </div>
      </div>
    </nav>
  );
};

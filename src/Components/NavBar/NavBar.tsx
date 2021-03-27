import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../store/action-creators";
import { useTypedSelector } from "../../store/hooks/reducer";

export const NavBar = () => {
  const dispatch = useDispatch();

  const userLoggedIn = useTypedSelector((state) => {
    return state.userReducer.user;
  });

  const handleLogout = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(logout);
  };

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
          <span className="navbar-text">
            {userLoggedIn && (
              <div>
                Logged in as: {userLoggedIn.displayName}{" "}
                <button
                  onClick={handleLogout}
                  type="button"
                  className="btn btn-secondary btn-sm mx-3"
                >
                  Logout
                </button>
              </div>
            )}
            {userLoggedIn == null && (
              <div>
                <Link to="/login">Login</Link>
              </div>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

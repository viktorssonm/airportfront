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
              <a className="nav-link active" href="/">
                Select Airports
              </a>
            </li>
            <li className="navbar-item">
              <a className="nav-link" href="/">
                Show Weather
              </a>
            </li>
            <li className="navbar-item">
              <a className="nav-link" href="/">
                More Information
              </a>
            </li>
          </ul>
          <span className="navbar-text">Signed in as Magnus Viktorsson</span>
        </div>
      </div>
    </nav>
  );
};

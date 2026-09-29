import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          JobTrack
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">
            Dashboard
          </Link>

          <Link to="/applications" className="nav-link">
            Applications
          </Link>

          <Link to="/add-application" className="add-button">
            + Add Application
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
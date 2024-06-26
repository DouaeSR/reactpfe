import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">DABS</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDropdown">
      
            <ul className="navbar-nav">
             
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
              <NavLink className="nav-link text-white" to="/patient/signUp">SignUp</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/logIn">LogIn</NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

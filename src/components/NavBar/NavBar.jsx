import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";

const NavBar = () => {
  let navigate = useNavigate();
  let auth = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">My To Do List</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
            <li class="nav-item">
              {
                auth.user ? (
                  <button type="button" className="btn btn-primary" onClick={() => {
                    auth.signout(() => navigate("/"));
                  }}>Log Out</button>
                ) : (
                  <Link className="nav-link" to="/login">Log In</Link>
                )
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

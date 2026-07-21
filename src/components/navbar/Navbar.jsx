import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export const NavBar = () => {
  const navigate = useNavigate();
  //need to connect it to user auth for access to profile and login/logout
  return (
    <>
      <div className="navbarContainer">
        <div className="logoNTitle">
          <p className="logo">&#127924;</p>
          <h2 className="title">Card Creators</h2>
        </div>

        <ul className="navbar">
          <li className="navbar-item">
            <Link to="/explore">Explore</Link>
          </li>
          <li className="navbar-item">
            <Link to="/collection">My Collection</Link>
          </li>
          <li className="navbar-item">
            <Link to="/favorites">My Favorites</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create">Create-A-Card</Link>
          </li>
          <li className="navbar-item">
            <Link to="/profile">Profile</Link>
          </li>

          {localStorage.getItem("card_user") ? (
            <li className="navbar-item navbar-logout">
              <Link
                className="navbar-link"
                to=""
                onClick={() => {
                  localStorage.removeItem("card_user");
                  navigate("/", { replace: true });
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </>
  );
};

import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  //need to connect it to user auth for access to profile and login/logout
  return (
    <ul>
      <li>
        <Link to="/explore">Explore</Link>
      </li>
      <li>
        <Link to="/collection">My Collection</Link>
      </li>
      <li>
        <Link to="/favorites">My Favorites</Link>
      </li>
      <li>
        <Link to="/create">Create-A-Card</Link>
      </li>
      <li>Profile</li>
      <li>Login</li>
    </ul>
  );
};

import { NavLink, useNavigate } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const AuthNav = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

    if (!isLoggedIn) {
      navigate("/login");
    }
  };
  return (
    <div>
      <NavLink className={buildLinkClass} to="/contactsPage">
        Home
      </NavLink>
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default AuthNav;

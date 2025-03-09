import s from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header className={s.header}>
      <h1 style={{ marginLeft: "40px" }}>Phonebook</h1>
      {isLoggedIn && <h2 className={s.user}>{user.email}</h2>}
      <ul className={s.headerList}>{!isLoggedIn ? <Navigation /> : <AuthNav />}</ul>
    </header>
  );
};

export default AppBar;

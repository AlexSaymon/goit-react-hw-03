import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Contacts from "./pages/Contacts/Contacts";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { useEffect } from "react";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";
import { fetchContacts } from "./redux/contacts/operations";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        {isRefreshing ? null : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {isLoggedIn && <Route path="/contactsPage" element={<Contacts />} />}
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;

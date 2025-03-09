import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contactsPage" element={<Contacts />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

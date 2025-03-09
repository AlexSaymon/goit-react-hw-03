import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";

const ContactsComponent = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      {isLoggedIn
        ? ((<ContactForm />), (<SearchBox />), (<ContactList />))
        : navigate("/login")}
    </div>
  );
};

export default ContactsComponent;

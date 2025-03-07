import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "../Contact/Contact.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectFilteredContactsMemo, selectLoading } from "../../redux/selectors";

const ContactList = () => {
  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectFilteredContactsMemo);

  return (
    <div>
      <ul className={s.itemList}>
        {isLoading ? (
          <p>Is Loading...</p>
        ) : (
          filteredContacts.map((contact) => <Contact key={contact.id} {...contact} />)
        )}
      </ul>
    </div>
  );
};

export default ContactList;

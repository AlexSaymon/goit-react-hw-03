import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "../Contact/Contact.module.css";

import { selectLoading } from "../../redux/contacts/selectors";
import { selectFilteredContactsMemo } from "../../redux/filters/selectors";

const ContactList = () => {
  const isLoading = useSelector(selectLoading);

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

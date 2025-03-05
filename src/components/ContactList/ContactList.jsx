import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import s from "../Contact/Contact.module.css";
import { selectFilters } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilters);
  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <div>
      <ul className={s.itemList}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

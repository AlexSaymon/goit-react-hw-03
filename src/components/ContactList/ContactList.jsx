import Contact from "../Contact/Contact";
import s from "../Contact/Contact.module.css";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <div>
      <ul className={s.itemList}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            {...contact}
            handleDeleteContact={handleDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import ContactData from "./ContactData.json";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("contacts"));
    return savedData ?? ContactData;
  });

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(searchData.toLowerCase()) ||
      number.toLowerCase().includes(searchData.toLowerCase())
  );

  const handleAddContact = (values, options) => {
    const newContact = { ...values, id: nanoid() };
    setContacts((prev) => [...prev, newContact]);
    options.resetForm();
  };

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <div>
        <h1 style={{ marginLeft: "40px" }}>Phonebook</h1>
        <ContactForm handleAddContact={handleAddContact} />
        <SearchBox value={searchData} onSearch={setSearchData} />
        <ContactList
          handleDeleteContact={handleDeleteContact}
          contacts={visibleContacts}
        />
      </div>
    </>
  );
}

export default App;

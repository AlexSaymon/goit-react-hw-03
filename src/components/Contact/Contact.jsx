import s from "./Contact.module.css";
import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";

const Contact = ({ name, number, handleDeleteContact, id }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.contactInfoWrapper}>
        <p className={s.name}>
          <BsFillPersonFill className={s.iconPerson} />
          {name}
        </p>
        <p className={s.number}>
          <BsFillTelephoneFill className={s.iconPhone} />
          {number}
        </p>
      </div>
      <button className={s.button} onClick={() => handleDeleteContact(id)} type="submit">
        Delete
      </button>
    </div>
  );
};

export default Contact;

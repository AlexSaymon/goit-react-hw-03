import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
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
      <button className={s.button} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;

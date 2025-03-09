import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contacts/operations";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };
  const dispatch = useDispatch();

  const handleAddContact = (values) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    console.log(values);
    dispatch(addContacts(newContact));
  };

  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Min. 3 symbols")
      .max(50, "Max. 50 symbols")
      .required("This field is required"),
    number: Yup.string()
      .min(3, "Min. 3 symbols")
      .max(50, "Max. 50 symbols")
      .required("This field is required"),
  });

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={orderSchema}
        onSubmit={handleAddContact}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.name}>Name</span>
            <Field className={s.field} name="name"></Field>
            <ErrorMessage name="name" component="p" className={s.error} />
          </label>

          <label className={s.label}>
            <span className={s.number}>Number</span>
            <Field className={s.field} name="number"></Field>
            <ErrorMessage name="number" component="p" className={s.error} />
          </label>

          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

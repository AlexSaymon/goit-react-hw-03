import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome ${res.user.name}`);
        navigate("/contactsPage");
      })
      .catch(() => {
        toast.error("Maybe try something else?");
      });
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <div className={s.wrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <h2>Register</h2>
          <Field name="name" placeholder="Enter your name"></Field>
          <Field name="email" placeholder="Enter your email"></Field>
          <Field name="password" placeholder="Enter your password"></Field>
          <button className={s.button} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;

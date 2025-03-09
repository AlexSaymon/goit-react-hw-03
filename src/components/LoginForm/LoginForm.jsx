import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome ${res.user.name}`);
        navigate("/contactsPage");
      })
      .catch(() => {
        toast.error("Maybe something else?");
      });
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className={s.wrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <h2>Login</h2>
          <Field name="email" placeholder="Enter Email"></Field>
          <Field name="password" placeholder="Enter password"></Field>
          <button type="submit" className={s.button}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

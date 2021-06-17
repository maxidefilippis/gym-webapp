import React from "react";
import "./login.scss";
import { useFormik } from "formik";
import MainLayout from "../Layout/mainLayout";
import { ButtonForm } from "../../components";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <MainLayout>
      <div className="login__container">
        <h1 className="login__title">LOGIN</h1>
        <form onSubmit={formik.handleSubmit} className="login__form__container">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <ButtonForm mt={1} mb={1} w={10} />
        </form>
        <div className="login__actions">
          <span>¿No estás registrado?</span>
          <span>Olvidé mi contraseña</span>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;

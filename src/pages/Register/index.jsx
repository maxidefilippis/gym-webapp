import React from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";
import { useFormik } from "formik";
import MainLayout from "../Layout/mainLayout";
import { ButtonForm } from "../../components";

const Register = () => {
  const { push } = useHistory();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: function (values) {
      const userValidate =
        values.username === "admin" && values.password === "admin"
          ? true
          : false;

      userValidate && push("/home");
    },
  });

  return (
    <MainLayout>
      <div className="register__container">
        <h1 className="register__title">Register</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="register__form__container"
        >
          <label htmlFor="username">Usuario</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.contraseña}
          />
          <ButtonForm mt={2} mb={1} w={11}>
            Ingresar
          </ButtonForm>
        </form>
        <div className="register__actions">
          <span>Iniciar sesión</span>
          <span>Olvidé mi contraseña</span>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;

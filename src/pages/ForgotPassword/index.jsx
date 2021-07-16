import React from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";
import { useFormik } from "formik";
import MainLayout from "../Layout/mainLayout";
import { ButtonForm } from "../../components";

const ForgotPassword = () => {
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
      <div className="forgotPassword__container">
        <h1 className="forgotPassword__title">Forgot Password ?</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="forgotPassword__form__container"
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
        <div className="forgotPassword__actions">
          <span>Iniciar sesión</span>
          <span>Olvidé mi contraseña</span>
        </div>
      </div>
    </MainLayout>
  );
};

export default ForgotPassword;

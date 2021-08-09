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
        <h1 className="forgotPassword__title">RECUPERAR CONTRASEÑA</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="forgotPassword__form__container"
        >
          <label htmlFor="username">Ingrese su e-mail</label>
          <input
            id="mail"
            name="mail"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.mail}
          />
          <ButtonForm mt={2} mb={1} w={11}>
            Enviar código de recuperación
          </ButtonForm>
        </form>
        <div className="forgotPassword__actions">
          <span onClick={() => push("/")}>Iniciar sesión</span>
          <span onClick={() => push("/register")}>Registrarse </span>
        </div>
      </div>
    </MainLayout>
  );
};

export default ForgotPassword;

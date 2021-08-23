import "./index.scss";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MainLayout from "../Layout/mainLayout";
import { ProfileViews } from "../../components/";

const Home = () => {
  const [view, setView] = useState("");
  const { push } = useHistory();
  const user = "admin";

  const logout = () => {
    push("/");
  };
  return (
    <MainLayout>
      <div className="home__container">
        <h1 className="home__title">BIENVENIDO!</h1>
        <p className="home__user">
          Hola <b>{user}</b>!
        </p>
        <div className="home__buttons">
          <p onClick={() => setView("Perfil")}>Perfil</p>
          <p onClick={() => setView("Alumnos")}>Alumnos</p>
          <p onClick={() => setView("Rutinas")}>Rutinas</p>
        </div>
        <ProfileViews view={view} />
        <div className="login__actions">
          <span onClick={logout}>Cerrar sesión</span>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

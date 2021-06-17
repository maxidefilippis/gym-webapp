import "./home.scss";
import React from "react";
import { useHistory } from "react-router-dom";
import MainLayout from "../Layout/mainLayout";

const Home = () => {
  const { push } = useHistory();
  const user = "admin";

  const logout = () => {
    push("/");
  };
  return (
    <MainLayout>
      <div className="home__container">
        <h1 className="home__title">BIENVENIDO!</h1>
        <p>Hola {user}!</p>
        <div className="login__actions">
          <span onClick={logout}>Cerrar sesión</span>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

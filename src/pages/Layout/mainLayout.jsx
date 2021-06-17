import React from "react";
import "./mainLayout.scss";

const MainLayout = ({ children, classContent }) => {
  const style = {
    background: "url(./assets/fondo2.jpg)",
    backgroundSize: "100%",
  };
  return (
    <div className="mainLayoutContainer" style={style}>
      {/* <Sidebar />
      <header className="mainLayoutContainer__header">
        <Navbar
          className="mainLayoutContainer__header__navbar"
          drawerToggleClick={drawerToggleClick}
        />
        <SideDrawer show={sideDraweOpen} />
      </header> */}
      <section className={`mainLayoutContainer__content ${classContent}`}>
        {children}
      </section>
    </div>
  );
};

export default MainLayout;

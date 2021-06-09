import React from "react";
import "./mainLayout.scss";

const MainLayout = ({ children, classContent }) => {
  return (
    <div className="mainLayoutContainer">
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

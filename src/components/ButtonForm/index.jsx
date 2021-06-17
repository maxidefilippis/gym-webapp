import React from "react";
import "../../styles/buttons.scss";

const ButtonForm = ({ children, m, mt, mb, w }) => {
  const style = {
    margin: `${m}rem`,
    marginTop: `${mt}rem`,
    marginBottom: `${mb}rem`,
    width: `${w}rem`,
  };
  return (
    <button className="ButtonForm" style={style} type="submit">
      {children}
    </button>
  );
};

export default ButtonForm;

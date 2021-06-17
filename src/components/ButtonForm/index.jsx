import React from "react";
import "../../styles/buttons.scss";

const ButtonForm = ({ m, mt, mb, w }) => {
  const style = {
    margin: `${m}rem`,
    marginTop: `${mt}rem`,
    marginBottom: `${mb}rem`,
    width: `${w}rem`,
  };
  return (
    <button className="ButtonForm" style={style} type="submit">
      Submit
    </button>
  );
};

export default ButtonForm;

import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

Button.propTypes = {
  onClick: PropTypes.func,
};

function Button(props) {
  const { className, onClick, children } = props;

  return (
    <button className={`btn ${className}`} onClick={onClick ? onClick : null}>
      {children}
    </button>
  );
}

function OutlineButton(props) {
  const { className, onClick, children } = props;

  return (
    <button
      className={`btn btn-outline ${className}`}
      onClick={onClick ? onClick : null}
    >
      {children}
    </button>
  );
}

export default Button;
export { OutlineButton };

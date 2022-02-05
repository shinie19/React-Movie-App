import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
  onClick: PropTypes.func,
};

function Button(props) {
  const { className, onClick, childrend } = props;

  return (
    <button
      className={`btn ${className}`}
      onClick={onClick ? () => onClick : null}
    >
      {childrend}
    </button>
  );
}

function OutlineButton(props) {
  const { className, onClick, childrend } = props;

  return (
    <button
      className={`btn-outline ${className}`}
      onClick={onClick ? () => onClick : null}
    >
      {childrend}
    </button>
  );
}

export default Button;
export { OutlineButton };

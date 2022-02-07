import PropTypes from "prop-types";
import React, { useRef } from "react";
import "./modal.scss";

Modal.propTypes = {
  id: PropTypes.string,
  active: PropTypes.bool,
  onClose: PropTypes.func,
};

function Modal(props) {
  const { id, active, onClose } = props;
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (onClose) onClose();
  };

  return (
    <div id={`modal_${id}`} className={`modal ${active ? "active" : ""}`}>
      <div ref={contentRef} className="modal__content">
        {props.children}
        <div className="modal__content__close" onClick={closeModal}>
          <i className="bx bx-x"></i>
        </div>
      </div>
    </div>
  );
}

export default Modal;

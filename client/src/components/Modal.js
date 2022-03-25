import React, { Fragment } from "react";
import './Modal.scss';

const Modal = (props) => {
  return (
    <div className="modal-main" id="modal" onClick={() => {
      props.showModal();
    }}>
      {props.show && props.category === 'monsters' && <div className="content">The {props.details.name} has {props.details.hit_points} hit points.</div>}
      {props.show && props.category === 'magic-items' && <div className="content">The {props.details.name} has a equipment category of {props.details.equipment_category.name} and {props.details.desc.join('')}.</div>}
    </div>
  )
}

export default Modal;
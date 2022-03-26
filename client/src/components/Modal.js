import React, { Fragment } from "react";
import './Modal.scss';

const Modal = (props) => {
  const descItems = (arr) => {
    return arr.map((element) => <li>{element}</li>)
  }
  return (
    <div className="modal-main" id="modal" onClick={() => {
      props.hideModal();
    }}>
      {props.show && props.category === 'monsters' && 
      <div className="content">
        <span>
        The {props.details.name} has {props.details.hit_points} hit points.
        
        </span>
      </div>}
      
      {props.show && props.category === 'magic-items' &&
      <div className="content">
        <h2>{props.details.name}</h2>
        <span>Category: {props.details.equipment_category.name}</span>
        <br></br>
        <span>
          <ul>
            {props.details.desc && descItems(props.details.desc)}
          </ul>
        </span>
      </div>}
    </div>
  )
}

export default Modal;
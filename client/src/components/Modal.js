import React, { Fragment } from "react";
import './Modal.scss';

const Modal = (props) => {
  const descItems = (arr) => {
    return arr.map((element) => <li key={element}>{element}</li>)
  }

  const formatObject = (obj) => {
    const sensesArray = [];
    for (const [key, value] of Object.entries(obj)) {
      sensesArray.push(<li>{key}: {value}</li>);
    }
    return sensesArray;
  }
  return (
    <div className="modal-main" id="modal" onClick={() => {
      props.hideModal();
    }}>
      {props.show && props.category === 'monsters' && 
      <div className="content">
        <h2>{props.details.name}</h2>
        <p>HP: {props.details.hit_points}</p>
        <p>Size: {props.details.size}</p>
        <p>Type: {props.details.type}</p>
        <p>Alignment: {props.details.alignment}</p>
        <p>Armor Class: {props.details.armor_class}</p>
        <p>Hit Dice: {props.details.hit_dice}</p>
        <ul>Senses: {formatObject(props.details.senses)}</ul>
        <p>XP: {props.details.xp}</p>
        <p>Challenge Rating: {props.details.challenge_rating}</p>

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

      {props.show && props.category === 'conditions' &&
      <div className="content">
        <h2>{props.details.name}</h2>
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
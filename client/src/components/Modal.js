import React from "react";
import './Modal.scss';

const Modal = (props) => {
  const descItems = (arr) => {
    return arr.map((element) => <li key={element} className="condition-item">{element}</li>)
  }

  const formatObject = (obj) => {
    const sensesArray = [];
    for (const [key, value] of Object.entries(obj)) {
      sensesArray.push(<li id="senses"><ins>{key}:</ins> {value}</li>);
    }
    return sensesArray;
  }
  return (
    <div className="modal-main" onClick={() => {
      props.hideModal();
    }}>
      {props.show && props.category === 'monsters' && 
      <div className="content">
        <div className="header">
          <h2>{props.details.name}</h2>
        </div>
        <ul className="monster-list">
          <li><strong>HP:</strong> {props.details.hit_points}</li>
          <li><strong>Size:</strong> {props.details.size}</li>
          <li><strong>Type:</strong> {props.details.type}</li>
          <li><strong>Alignment:</strong> {props.details.alignment}</li>
          <li><strong>Armor Class:</strong> {props.details.armor_class}</li>
          <li><strong>Hit Dice:</strong> {props.details.hit_dice}</li>
          <ul><strong>Senses:</strong> {formatObject(props.details.senses)}</ul>
          <li><strong>XP:</strong> {props.details.xp}</li>
          <li><strong>Challenge Rating:</strong> {props.details.challenge_rating}</li>
        </ul>
      </div>}
      
      {props.show && props.category === 'magic-items' &&
      <div className="content">
        <div className="header">
          <h2 className="header-text">{props.details.name}</h2>
        </div>
        <span className="category"><strong>Category:</strong> {props.details.equipment_category.name}</span>
        <br></br>
        <span>
          <ul>
            {props.details.desc && descItems(props.details.desc)}
          </ul>
        </span>
      </div>}

      {props.show && props.category === 'conditions' &&
      <div className="content">
        <div className="header">
          <h2 className="header-text">{props.details.name}</h2>
        </div>
        <ul>
          {props.details.desc && descItems(props.details.desc)}
        </ul>
      </div>}
    </div>
  )
}

export default Modal;
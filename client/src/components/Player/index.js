import React, { useState, useEffect } from 'react';
import './Player.scss';
import { ReactComponent as BarbarianIcon } from '../images/barbarian_icon.svg';
import { ReactComponent as DruidIcon } from '../images/druid_icon.svg';
import { ReactComponent as FighterIcon } from '../images/fighter_icon.svg';
import { ReactComponent as PaladinIcon } from '../images/paladin_icon.svg';
import { ReactComponent as RangerIcon } from '../images/ranger_icon.svg';
import { ReactComponent as WizardIcon } from '../images/wizard_icon.svg';
import Condition from './Condition';
import UseVisualMode from '../../hooks/UseVisualMode';
import axios from 'axios'
import Edit from './Edit';

const getClassIcon = (className) => {
  const classIcons =  {
    'barbarian': <BarbarianIcon className="dndClass barbarian"/>,
    'druid': <DruidIcon className="dndClass druid"/>,
    'fighter': <FighterIcon className="dndClass fighter"/>,
    'paladin': <PaladinIcon className="dndClass paladin"/>,
    'ranger': <RangerIcon className="dndClass ranger"/>,
    'wizard': <WizardIcon className="dndClass wizard"/>,
  }
  return classIcons[className];
}



const Player = (props) => {
  const EMPTY = "EMPTY";
  const EDIT = "EDIT";
  const SHOW = "SHOW";
  const { id: playerId, name, dnd_class, stats, level, getDetails, setCategory } = props;
  const [conditions, setConditions] = useState([]);
  const { mode, transition, back } = UseVisualMode(
    EMPTY
    )
    const onEdit = () => {
      transition(EDIT);
    }
    
  useEffect(() => {
      axios.get(`players/conditions/${playerId}`)
      .then(res => {
        if (res.data !== '') setConditions(res.data);
      });
  }, []);


  return (
    <article className="Player">
      {getClassIcon(dnd_class)}
      <h1>{name} | lvl {level}</h1>
      <div className="conditions">
        {conditions !== undefined && conditions.map(condition => <Condition key={name + "_" + condition.index} getDetails={getDetails} setCategory={setCategory} {...condition}/>)}
      </div>
      <button onClick={onEdit}>Details</button>
      {mode === EDIT && (
        <Edit
        conditions={conditions}
        setConditions={setConditions}
        stats={stats}
        back={back}
        playerId={playerId}
        />
      )} 
    </article>
  )
}

export default Player;
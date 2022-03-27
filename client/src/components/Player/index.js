import React, { useContext } from 'react';
import './Player.scss';
import { ReactComponent as BarbarianIcon } from '../images/barbarian_icon.svg';
import { ReactComponent as DruidIcon } from '../images/druid_icon.svg';
import { ReactComponent as FighterIcon } from '../images/fighter_icon.svg';
import { ReactComponent as PaladinIcon } from '../images/paladin_icon.svg';
import { ReactComponent as RangerIcon } from '../images/ranger_icon.svg';
import { ReactComponent as WizardIcon } from '../images/wizard_icon.svg';
import Condition from './Condition';
import UseVisualMode from '../../hooks/UseVisualMode';
import Edit from './Edit';
import { PartyContext } from '../../providers/PartyProvider';

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
  const { id: playerId, name, dnd_class, stats, level, getDetails, setCategory, playerCondition } = props;
  // const { state } = useContext(PartyContext);
  const { mode, transition, back } = UseVisualMode(
    EMPTY
    )
    const onEdit = () => {
      transition(EDIT);
    }


  return (
    <article className="Player">
      {getClassIcon(dnd_class)}
      <h1>{name} | lvl {level}</h1>
      <div className="conditions">
        {playerCondition !== undefined && playerCondition.map(condition => <Condition key={name + "_" + condition.index} getDetails={getDetails} setCategory={setCategory} {...condition} />)}
      </div>
      <button onClick={onEdit}>Details</button>
      {mode === EDIT && (
        <Edit
        stats={stats}
        back={back}
        playerId={playerId}
        />
      )} 
    </article>
  )
}

export default Player;
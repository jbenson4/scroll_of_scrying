import React, {useContext, useEffect} from 'react'
import { ReactComponent as BlindedIcon } from '../images/conditions/blinded.svg';
import { ReactComponent as CharmedIcon } from '../images/conditions/charmed.svg';
import { ReactComponent as DeafenedIcon } from '../images/conditions/deafened.svg';
import { ReactComponent as ExhaustionIcon } from '../images/conditions/exhaustion.svg';
import { ReactComponent as FrightenedIcon } from '../images/conditions/frightened.svg';
import { ReactComponent as GrappledIcon } from '../images/conditions/grappled.svg';
import { ReactComponent as IncapacitatedIcon } from '../images/conditions/incapacitated.svg';
import { ReactComponent as InvisibleIcon } from '../images/conditions/invisible.svg';
import { ReactComponent as ParalyzedIcon } from '../images/conditions/paralyzed.svg';
import { ReactComponent as PetrifiedIcon } from '../images/conditions/petrified.svg';
import { ReactComponent as PoisonedIcon } from '../images/conditions/poisoned.svg';
import { ReactComponent as ProneIcon} from '../images/conditions/prone.svg';
import { ReactComponent as RestrainedIcon } from '../images/conditions/restrained.svg';
import { ReactComponent as StunnedIcon } from '../images/conditions/stunned.svg';
import { ReactComponent as UnconsciousIcon } from '../images/conditions/unconscious.svg';
import './Condition.scss';
import { PartyContext } from '../../providers/PartyProvider';

const getConditions = (index) => {
  const conditionIcons = {
    blinded: <BlindedIcon />,
    charmed: <CharmedIcon />,
    deafened: <DeafenedIcon />,
    exhaustion: <ExhaustionIcon />,
    frightened: <FrightenedIcon />,
    grappled: <GrappledIcon />,
    incapacitated: <IncapacitatedIcon />,
    invisible: <InvisibleIcon />,
    paralyzed: <ParalyzedIcon />,
    petrified: <PetrifiedIcon />,
    poisoned: <PoisonedIcon />,
    prone: <ProneIcon />,
    restrained: <RestrainedIcon />,
    stunned: <StunnedIcon />,
    unconscious: <UnconsciousIcon />
  }
  return conditionIcons[index];
} 

const Condition = (props) => {
  const { index, getDetails, setCategory, player_id } = props;
  const { deleteCondition } = useContext(PartyContext);
  const functions = (event) => {
    getDetails(event);
    setCategory({
      data: {},
      index: 'conditions'
    });
  }
  return (
    <div>
      <div className="condition" id={index} onClick={(event) => functions(event)}>
        {getConditions(index)}
      </div>
      {/* Add to button onClick={deleteCondition(index, playerId)} */}
      <button onClick={() => deleteCondition(index, player_id)}>X</button>

    </div>
  )
}

export default Condition
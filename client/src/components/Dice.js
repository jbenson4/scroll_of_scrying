import * as rpgDiceRoller from '@dice-roller/rpg-dice-roller';
import React, {useState} from 'react';
import './Dice.scss';

function Dice() {
   //states---------------------------------------------
   const [rollResult, setRollResult] = useState ("")
   const [dice, setDice] = useState([]);
   const [history, setHistory] = useState([]);
   const [active, setActive] = useState(false);
   const [rollActive, setRollActive] = useState(false);
   const [modifier, setModifier] = useState(0);
   
  
   
   //setState to dice---------------------------------
   function addDice (whichDice) {
     setDice(() =>[...dice, whichDice])
   }
   
   //change dice array to string------------------------
   function changeArray (dice) {
     let counts = {}
     let result = ""
 
     for (let d of dice) {
       if (counts[d]) {
         counts[d] += 1;  
       } else {
         counts[d] = 1
       }
     }
 
     for (let key in counts) {
      let words = counts[key] + key
      result += (`${words}+`)
     }
 
     return result.slice(0, -1)
   }
   
   
   //takes in the dice array, converted to string and roll it, and save prev rolls to history
   const roll = (dice, replace = false) => { 
     let newDice = changeArray(dice)
     
     let roller = new rpgDiceRoller.DiceRoller();
     const rolls = `You rolled : ${roller.roll(`${newDice} + ${modifier}`)}`
     setRollResult(rolls);
    console.log(modifier)
     
     let modHistory = `${roller.output} \n`.slice(",")
     if (replace) {
       setHistory(() => [...history.slice(0, history.length - 1), modHistory])
     } else {
       setHistory(() => [...history, modHistory])
     }
   }
 
   //resets the states-------------------------------
   const reset = () => {
     setDice([])
     setRollResult("")
   }
 
   //toggle display and not display-----------------------
   const toggleClass = () => {
     setActive(!active)
   };
   
   const toggleClassRoll = () => {
     setRollActive(!rollActive)
   }
 
   //check if modifier has number--------------------------------------------
   const modifierNum = () => {
     var x = document.getElementById('modifierInput')
     if (!x.value) {
        setModifier(0)
     } else {
        setModifier(x.value)
     }
   }
   return(
     <body>
      <button className='diceBtn' onClick={toggleClassRoll}> DICE ROLL</button>
     <div className={rollActive ? 'null' : 'container'}>
     
       <div className='displayText'>
       
         <textarea
         readOnly
           value={changeArray(dice)}
         />
         <textarea
         readOnly
         className={active ? `null` : `history`}
         value={history}
         />
       </div>

      <div className='modifier'>
        Modifier: <input type='number' id='modifierInput' onKeyUp={modifierNum}></input>
      </div>
 
       <div className='dices'>
         <button onClick={() => addDice("d4")}>d4</button>
         <button onClick={() => addDice("d6")}>d6</button>
         <button onClick={() => addDice("d8")}>d8</button>
         <button onClick={() => addDice("d10")}>d10</button>
         <button onClick={() => addDice("d12")}>d12</button>
         <button onClick={() => addDice("d20")}>d20</button>
       </div>

       <textarea readOnly className='resultBar'
           value={rollResult} 
         /> 

       <div className='rollingDice'>
         <button onClick={() => roll(dice)}>ROLL</button>
         <button onClick={reset}>clear</button>
         <button onClick={toggleClass}>history</button>
       </div>
     
     </div>
     </body>
   )
}

export default Dice;
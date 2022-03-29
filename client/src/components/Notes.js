import React, { useContext, useState } from 'react';
import { PartyContext } from '../providers/PartyProvider';
import './Notes.scss'
import Note from './Note';

const Notes = () => {
  const { state, setState } = useContext(PartyContext);
  const initialFormData = {title: "", date: "", content: "" };
  const { formData, setFormData } = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  }

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    const newNotes = [...state.notes, formData];
    setState(
      {
        ...state,
        notes: newNotes
      });
    setFormData(initialFormData);
    console.log(state.notes);
  }

  return (
    <div className="notes">
      <fieldset onSubmit={() => handleNoteSubmit} action="#">
        <label htmlFor="title">Title</label>
        <input type="text" required={true} name="title" onChange={() => handleChange}></input>
        <label htmlFor="date">Date</label>
        <input type="date" name="date" onChange={() => handleChange}></input>
        <label htmlFor="content">Content</label>
        <textarea rows='20' cols='75' name="content" onChange={() => handleChange}></textarea><br/>
        <button type="submit">Submit</button>
      </fieldset>
      { state.notes.map(note => <Note key={note.title + note.date} {...note}/>) }
      <article>
        <h2>Session 2</h2>
        <span>03/15/2022</span>
        <p>
        Tepid water drips from looming stalactites, jutting downward like the teeth of some massive beast. 
        Your breath, footfalls, even your heartbeat, echo through the cavernous space, eventually fading 
        into the oppressive darkness. Moss and lichen, loamy and damp, enshroud the stone. Skitterings 
        and scrapings, almost alien to your ears, wind their way through the tunnels and reverberate 
        endlessly. What lurks below?
        </p>
      </article>
      <article>
        <h2>Session 1</h2>
        <span>03/08/2022</span>
        <p>
        It takes a few moments to realize that it is not simply the sense of claustrophobia creeping into your 
        mind, but that the cavern walls are indeed closing in. And as you continue onward, the cavern narrows 
        to the point where you are scarcely able to squeeze through, the walls barely a shoulder width apart. 
        You can only hope that a cave predator does not take advantage of these close quarters to mount a 
        punishing ambush . . .
        </p>
      </article>
    </div>
  )
}

export default Notes
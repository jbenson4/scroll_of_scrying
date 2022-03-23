import React, {useState} from "react";

export default function AddToList (props) {

  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [initiative, setInitiative] = useState('');
  const [error, setError] = useState('');

  const reset = () => {
    setName("")
    setHp("")
    setError('')
    setInitiative('')
  }

  function validate () {
     if (name === "") {
       setError("Name can't be empty")
       return;
     } 
     if (hp === "" || hp === 0) {
       setError("Hp can't be empty/zero")
     }
     if (initiative === "" || initiative === 0) {
      setError("Initiative can't be empty/zero")
    }
    setError('');
    props.onSave(name, hp, initiative)
  }

  return (
    <main>
      <section>
      <form onSubmit={e => e.preventDefault()}>
        <input 
        name="name"
        type='text'
        placeholder="enter your name"
        value={name}
        onChange= {e => setName(e.target.value)}/>
        <input 
        hp='hp'
        type='number'
        placeholder="enter your health"
        value={hp}
        onChange= {e => setHp(e.target.value)}/>
        <input 
        initiative='initiative'
        type='number'
        placeholder="enter your initiative"
        value={initiative}
        onChange= {e => setInitiative(e.target.value)}/>
      </form>
      </section>
      <section>{error}</section>
      <section>
        <button onClick={validate}>Create</button>
        <button onClick={reset}>Clear</button>
      </section>
    </main>
  )
  
}


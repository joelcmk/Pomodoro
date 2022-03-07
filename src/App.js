
import './App.css';
import { uuid } from 'uuid'
import Timer from './components/Timer';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState('Add Task');
  const [notes, setNotes] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([...notes, { id: id, text: value }]);
  }

  const id = 'id' + Math.random().toString(16).slice(2)

  console.log(notes)

  return (
    <div className="App">
      <Timer />
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={handleChange}></input>
        </form>
        <div>
          {notes.map(x => (
            <div>{x.text}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

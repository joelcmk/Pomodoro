import '../App.css';
import { useState } from 'react';
import TodoList from './TodoList';

function Form() {

  const [value, setValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const id = 'id' + Math.random().toString(16).slice(2)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { id: id, text: value, completed: false }]);
    setValue('')
  }



  return (
    <div className="todo_list">
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder="Add Task" size="29.5" onChange={handleChange}></input>
      </form>
      {todoList.map(todo => (
        <TodoList todoList={todoList} todo={todo} setTodoList={setTodoList} />
      ))}
    </div>
  );
}

export default Form;
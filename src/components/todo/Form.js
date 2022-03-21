import '../../App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { MdCheckCircle } from 'react-icons/md';
import { IconContext } from "react-icons";

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

  const handleComplete = (x) => {
    setTodoList(todoList.map(todo => {
      if (todo.id === x.id) {
        return { ...todo, completed: !todo.completed }
      }
      console.log(todo)
      return todo
    })
    )
  }

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(todoList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodoList(items);
  }

  return (
    <div className="todo_list">
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder="Add Task" size="29.5" onChange={handleChange}></input>
      </form>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {todoList.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided) => (
                    <li className="todo" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <IconContext.Provider size="3em" value={todo.completed ? { color: "green" } : { color: "#ECECEC" }}>
                        <div className="todo_btn" onClick={() => handleComplete(todo)} >
                          <div><MdCheckCircle />
                            <div className={todo.completed ? "todo_text completed" : "todo_text"}>{todo.text}</div>
                          </div>
                        </div>
                      </IconContext.Provider>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Form;
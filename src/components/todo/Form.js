import '../../App.css';
import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TodoList from './TodoList';

function Form() {
  const [value, setValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const id = `id${Math.random().toString(16).slice(2)}`;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { id, text: value, completed: false }]);
    setValue('');
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(todoList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodoList(items);
  };

  const Todos = React.memo(() => todoList.map((todo, index) => (
    <TodoList
      key={todo.id}
      todo={todo}
      todoList={todoList}
      index={index}
      setTodoList={setTodoList}
    />
  )));

  return (
    <div className="todo_list">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Add Task"
          size="29.5"
          onChange={handleChange}
        />
      </form>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Todos />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Form;

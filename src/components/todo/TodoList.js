/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { Draggable } from 'react-beautiful-dnd';

function TodoList({
  todo, todoList, setTodoList, index,
}) {
  const handleComplete = (x) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === x.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    );
  };

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <div
          role="button"
          onKeyDown={handleComplete}
          tabIndex={0}
          className="todo"
          onClick={() => handleComplete(todo)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <IconContext.Provider
            size="3em"
            value={
              todo.completed
                ? useMemo({ color: 'green' })
                : useMemo({ color: '#ECECEC' })
            }
          >
            <div>
              <MdCheckCircle />
              <div
                className={todo.completed ? 'todo_text completed' : 'todo_text'}
              >
                {todo.text}
              </div>
            </div>
          </IconContext.Provider>
        </div>
      )}
    </Draggable>
  );
}

export default TodoList;

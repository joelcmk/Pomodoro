import { MdCheckCircle } from 'react-icons/md';
import { IconContext } from "react-icons";
import { Draggable } from 'react-beautiful-dnd';

function TodoList({ todo, todoList, setTodoList, index }) {

  const handleComplete = (x) => {
    setTodoList(todoList.map(todo => {
      if (todo.id === x.id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    )
  }

  return (
    <>
      <Draggable draggableId={todo.id} index={index}>
        {provided => (
          <div className="todo"
            onClick={() => handleComplete(todo)}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps} >
            <IconContext.Provider size="3em" value={todo.completed ? { color: "green" } : { color: "#ECECEC" }}>
              <div><MdCheckCircle />
                <div className={todo.completed ? "todo_text completed" : "todo_text"}>{todo.text}</div>
              </div>
            </IconContext.Provider>
          </div>
        )}
      </Draggable>

    </>
  );
}

export default TodoList;
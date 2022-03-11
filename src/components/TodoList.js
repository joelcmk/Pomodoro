import { MdCheckCircle } from 'react-icons/md';
import { IconContext } from "react-icons";

function TodoList({ todo, todoList, setTodoList }) {

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

  return (
    <>
      <IconContext.Provider size="3em" value={todo.completed ? { color: "green" } : { color: "#ECECEC" }}>
        <button className="todo" onClick={() => handleComplete(todo)} >
          <div><MdCheckCircle />
            <div className={todo.completed ? "todo_text completed" : "todo_text"}>{todo.text}</div>
          </div>
        </button>
      </IconContext.Provider>
    </>
  );
}

export default TodoList;
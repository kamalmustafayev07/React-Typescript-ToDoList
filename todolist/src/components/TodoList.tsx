import "../components/TodoList.css"
import { Todo } from "../Model"
import SingleTodo from "./SingleTodo";

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <ul className='todolist-container'>
    {todos.map(todo=>(
      <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
    ))}
</ul>
  )
}

export default TodoList
import { useState } from 'react';
import '../src/App.css';
import InputField from './components/InputField';
import Todo from './model.ts';
import TodoList from './components/TodoList';

const App : React.FC = () => {
  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<Todo[]>([]);

  const handleAdd = ():void =>{
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isComplete:false}]);
      setTodo("");
    }
   
  };

  return (
    <div className="app-container">
      <p className="app-container__heading">Taskify</p>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />

    </div>
  )
}

export default App
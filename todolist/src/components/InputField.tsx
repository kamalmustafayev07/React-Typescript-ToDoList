import '../components/InputField.css'
import React from 'react';
import { useRef } from 'react';

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:()=>void; 
}

const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  const inputRef=useRef<HTMLInputElement>(null);
  return (
    <div className="input-container">
        <input value={todo} onChange={(e)=>{setTodo(e.target.value)}}type="text" placeholder="Enter a task" className="input-container__input"/>
        <button onClick={()=>{
          handleAdd();
          inputRef.current?.blur();
          }} className="input-container__button">Go</button>
    </div>
  )
}

export default InputField
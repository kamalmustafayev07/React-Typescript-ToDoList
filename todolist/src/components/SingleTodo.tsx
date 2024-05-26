import '../components/SingleTodo.css';
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from '../Model';
import { useEffect, useRef, useState } from 'react';
import { KeyboardEvent } from 'react';

interface Props{
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {
    const [edit,setEdit]=useState<boolean>(false);
    const [editTodo,setEditTodo]=useState<string>(todo.todo);

    const handleComplete=(id:number)=>{
        setTodos(todos.map(todo=>
            todo.id===id?{...todo,isComplete:!todo.isComplete}:todo
        )
    )};

    const handleDelete=(id:number)=>{
        setTodos(todos.filter(todo=>
            todo.id!==id)
        );
    }

    const handleEdit=(id:number)=>{
        if(!todo.isComplete){
            setEdit(!edit);
        }
    }

    const handleOnKeyPress=(id:number,e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key=='Enter')
            {
                setTodos(todos.map((todo)=>(todo.id===id ? {...todo,todo:editTodo} : todo)));
                setEdit(!edit);
            }
    }
    const inputRef=useRef<HTMLInputElement>(null);

    useEffect(()=>{
        inputRef.current?.focus();
    },[edit]);
    


  return (
    <li className='todos__single'>
        {todo.isComplete ? <s className='todos__single--text'>{todo.todo}</s>: edit ? <input ref={inputRef} className='todos__single--input' type="text" value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} onKeyDown={(e)=>{handleOnKeyPress(todo.id,e)}}/> : <p className='todos__single--text'>{todo.todo}</p>}
        <div className='todos__single-icons'>
            <span className='icon' onClick={()=>handleEdit(todo.id)}><AiFillEdit /></span>
            <span className='icon' onClick={()=>handleDelete(todo.id)}><AiFillDelete /></span>
            <span className='icon' onClick={()=>handleComplete(todo.id)}><MdDone /></span>
        </div>
    </li>
  )
}

export default SingleTodo;
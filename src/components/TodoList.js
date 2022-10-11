import React ,{useState}from 'react';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos,setTodos]=useState([]);

    const addtodo=todo =>{
        if(!todo.text||/^\s*$/.test(todo.text)){
            return;
        }
        const newTodos=[todo,...todos];
        setTodos(newTodos);
    }
  return (
    <div>
      <h1>
        What's the Plan of Today !!! 
      </h1>
      <TodoForm onSubmit={addtodo}/>
    </div>
  )
}

export default TodoList

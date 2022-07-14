import React, { useState } from 'react';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import TodoForm from './TodoForm';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [todo, setTodo] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(todo.id, value);
        setTodo({
            id: null,
            value: ''
        })
    }

    if(todo.id){
        return <TodoForm edit={true} todo={todo} onSubmit={submitUpdate}/>
    }
    
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete': 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</div>
            <div className='icons'>
                <TiEdit className='edit-icon' onClick={() => setTodo({id: todo.id, value: todo.text})}/>
                <RiCloseCircleLine className='delete-icon' onClick={() => removeTodo(todo.id)}/>
            </div>
        </div>
    ))
}

export default Todo;

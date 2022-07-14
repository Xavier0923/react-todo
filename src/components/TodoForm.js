import React, { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = (e) => {
        console.log(e.target);
        e.preventDefault();
        if(props.edit){
            props.onSubmit({
                id: props.todo.id,
                text: input
            })
        } else {
            props.onSubmit({
                id: props.id + 1,
                text: input
            });
        }
        setInput('')
    }
    return (
        <>
            <form action="" className="todo-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={props.edit ? "Update a Todo" : "Add a Todo"}
                    value={input}
                    name="text"
                    className="todo-input"
                    onChange={handleChange}
                    ref={inputRef}
                />
                {props.edit ? 
                <button className="todo-button edit" disabled={input ? false : true}>Update</button> :
                <button className="todo-button" disabled={input ? false : true}>Add todo</button>
                }
            </form>
        </>
    );
};

export default TodoForm;

import React, {useState} from 'react';
import '../App.css';

function Input({ input, setInput, todo, setTodo }) {

    const updateInput = (e) => {
        setInput(e.target.value);
    }

    const submitTodo = (e) => {
        e.preventDefault();

        setTodo([
            ...todo,
            {
                id: Math.random(),
                text: input,
                isCompleted: false
            }
        ]);

        //reset input field
        setInput('');
    }

    return (
        <div>
            <form onSubmit={submitTodo}>
                <input type="text" placeholder="Enter today's todo thing" value={input} onChange={updateInput} ></input>
                <button type="submit" className="addButton">
                    <i className="fas fa-plus fa-lg"></i>
                </button>
            </form>
        </div>
    )
}

export default Input;

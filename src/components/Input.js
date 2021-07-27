import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdded } from '../redux/actionCreator';
import '../App.css';

function Input({ input, setInput }) {

    const dispatch = useDispatch();

    const updateInput = (e) => {
        setInput(e.target.value);
    }

    const submitTodo = (e) => {
        e.preventDefault();
        dispatch(todoAdded(input));

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

import React from 'react';
import { todoDeleted, todoCompleted } from '../redux/actionCreator';
import { useDispatch } from 'react-redux';

function Todo({ todo }) {

    const dispatch = useDispatch();

    const doneTodo = () => {
        dispatch(todoCompleted(todo.id));
    }

    const deleteTodo = (e) => {
        const element = e.target.parentElement;
        element.classList.add('removeTodo');
        element.addEventListener('transitionend', function() {
            dispatch(todoDeleted(todo.id));
        })
    }

    return (
        <div id={todo.id} className={`todo ${todo.isCompleted ? 'workDone' : '' }`}>
            <p className="todoItem">{todo.text}</p>
            <button onClick={doneTodo} className="completeButton">
                <i className="fas fa-check fa-lg"></i>
            </button>
            <button onClick={deleteTodo} className="deleteButton">
                <i className="fas fa-trash fa-lg"></i>
            </button>
        </div>
    )
}

export default Todo;

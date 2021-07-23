import React from 'react'

function Todo({ todo, todos, setTodos }) {

    const doneTodo = () => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return {
                        ...item, isCompleted: !item.isCompleted
                    }
                }
                return item;
            })
        )
    }

    const deleteTodo = (e) => {
        const element = e.target.parentElement;
        element.classList.add('removeTodo');
        element.addEventListener('transitionend', function() {
            setTodos(
                todos.filter((item) => item.id !== todo.id)
            )
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

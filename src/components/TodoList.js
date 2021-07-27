import React from 'react';
import Todo from './Todo';

function TodoList({ filterTodo, status }) {

    return (
        <div className="todoList">
            
            {
                filterTodo.map((todo) => {
                    return(
                        <Todo key={todo.id} todo={todo} />
                    );
                })
            }

        </div>
    )
}

export default TodoList;

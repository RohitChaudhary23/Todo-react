import React from 'react';

function Pending({ todo, count, setTodo }) {

    const clearTodo = () => {
        setTodo([]);
    }

    if(count > 0) {
        const statusDiv = document.querySelector('.todoStatus');
        statusDiv.style.display = 'flex';
        statusDiv.style.justifyContent = 'space-around';
    }

    return (
        <div className="todoStatus">
		 	<p className="status">You have {count} pending {count > 1 ? 'tasks' : 'task'}.</p>
		 	<button onClick={clearTodo} className="clearButton">Clear All</button>
		 </div>
    )
}

export default Pending;

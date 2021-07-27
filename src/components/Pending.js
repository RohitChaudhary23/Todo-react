import React from 'react';
import { clearedTodo } from '../redux/actionCreator'
import { useDispatch } from 'react-redux';

function Pending({ count }) {
    
    const dispatch = useDispatch();

    const clearTodo = () => {
        dispatch(clearedTodo());
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

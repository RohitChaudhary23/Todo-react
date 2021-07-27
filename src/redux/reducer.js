import * as actions from './actionTypes';

let lastId = 0;

const initialState = {
    todos: []
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.TODO_ADDED:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: ++lastId,
                        text: action.payload.text,
                        isCompleted: false 
                    }
                ]
            };

        case actions.TODO_DELETED:
            const newTodos = state.todos.filter(todo => todo.id !== action.payload.id );
            return {
                ...state,
                todos: newTodos
            }

        case actions.TODO_COMPLETED:
            const updatedTodos = state.todos.map(todo => todo.id !== action.payload.id ? todo : {...todo, isCompleted: !todo.isCompleted});
            return {
                ...state,
                todos: updatedTodos
            }

        case actions.TODO_CLEARED:
            const clearTodo = [];
            return {
                todos: clearTodo
            }

        case actions.TODO_RECOVERED:
            const recoverTodo = action.payload.data;
            lastId = recoverTodo.reduce((max, id) => { 
                        let maxId = Math.max(max, id.id);
                        return maxId;
                    }, 0);
            return {
                ...state,
                todos: [...recoverTodo]
            }

        default :
            return state;
    }
}

export default Reducer;
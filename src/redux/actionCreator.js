import * as actions from './actionTypes';

export const todoAdded = (text) => ({
    type: actions.TODO_ADDED,
    payload: {
        text
    }
});

export const todoCompleted = (id) => ({
    type: actions.TODO_COMPLETED,
    payload: {
        id
    }
});

export const todoDeleted = (id) => ({
    type: actions.TODO_DELETED,
    payload: {
        id
    }
});

export const clearedTodo = () => ({
    type: actions.TODO_CLEARED
});

export const todoRecovered = (data) => ({
    type: actions.TODO_RECOVERED,
    payload: {
        data
    }
});
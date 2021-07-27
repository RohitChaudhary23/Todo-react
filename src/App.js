import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
import Pending from './components/Pending';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { todoRecovered } from './redux/actionCreator';

function App() {

  const [newTodoItem, setNewTodoItem] = useState('');
  const [filterTodo, setFilterTodo] = useState([]);
  const [status, setStatus] = useState('all');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const [count, setCount] = useState(0);

  //run once when app mounts on DOM
  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {

    doFilterTodo();
    setCount(
      todos.filter(todo => todo.isCompleted !== true).length
    )
    saveToLocal()

  }, [todos]);

  const doFilterTodo = (value = status) => {
    
    setStatus(value);

    switch(value) {

      case 'completed':
        setFilterTodo(
          todos.filter(todo => todo.isCompleted === true)
        );
        console.log(filterTodo);
        break;

      case 'uncompleted':
        setFilterTodo(
          todos.filter((todo) => todo.isCompleted !== true)
        );
        break;
      
      default:
        setFilterTodo(todos);
    }
  }

  //save to local
  const saveToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem('todos'));
      console.log(local);
      dispatch(todoRecovered(local));
    }
  };

  return (
    <div className="container">

      <h1>Rohit's Todo List</h1>

      <Input input={newTodoItem} setInput={setNewTodoItem} />

      <div className="select">
        <select name="typeTodo" onChange={(e) => doFilterTodo(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>

      <TodoList filterTodo={filterTodo} />
      
      <Pending count={count} />

    </div>
  );
}

export default App;

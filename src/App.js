import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
import Pending from './components/Pending';
import './App.css';

function App() {

  const [newTodoItem, setNewTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [count, setCount] = useState(0);

  //run once when app mounts on DOM
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {

    doFilterTodo();
    setCount(
      todoList.filter(todo => todo.isCompleted !== true).length
    );
    saveToLocal();

  }, [status, todoList]);

  const doFilterTodo = () => {

    switch(status) {

      case 'completed':
        setFilteredTodos(
          todoList.filter((todo) => todo.isCompleted === true )
        );
        break;

      case 'uncompleted':
        setFilteredTodos(
          todoList.filter((todo) => todo.isCompleted !== true)
        );
        break;
      
      default:
        setFilteredTodos(todoList);
    }
  }

  //save to local
  const saveToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  };

  const getLocalTodos = () => {

    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem('todos'));
      setTodoList(local);
    }
  };

  return (
    <div className="container">

      <h1>Rohit's Todo List</h1>

      <Input input={newTodoItem} setInput={setNewTodoItem} todo={todoList} setTodo={setTodoList} />

      <div className="select">
        <select name="typeTodo" onChange={(e) => setStatus(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>

      <TodoList todos={todoList} setTodos={setTodoList} filteredTodos={filteredTodos} />
      
      <Pending todo={todoList} count={count} setTodo={setTodoList} />

    </div>
  );
}

export default App;

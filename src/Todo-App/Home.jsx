import React, { useState } from 'react';
import "./Style.css";
import Heading from "./Heading";
import Form from './Form';
import TodoList from './TodoList';

function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='container'>
      <Heading />
      <Form addTodo={addTodo} todos={todos} deleteTodo={deleteTodo}  />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Home;




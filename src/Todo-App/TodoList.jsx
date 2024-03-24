
import React from 'react';
import './Style.css'; 
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";


function TodoList({ todos, deleteTodo, setMessage, setMessageType }) {
  const handleDelete = (id) => {
    deleteTodo(id);
    setMessage('Item deleted successfully');
    setMessageType('success');
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 2000); // Hide the message after 2 seconds
  };

  return (
    <div>
      {todos.length === 0 ? (
        <p>No todos to display</p>
      ) : (
        <ol>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              {/* <i  onClick={() => handleDelete(todo.id)}></i> */}
              <div className='list_div'><FaPencilAlt className='edit_icon' /> <FaTrash className='delete_icon' onClick={() => handleDelete(todo.id)}  /></div>
              </li>
             ))}
        </ol>

/* <ul className="icon-list">
  <li className="list-item">
    <div className='edit_div'><FaPencilAlt className='edit_icon' /></div>
    
    <div className='delete_div'><FaTrash className='delete_icon' /></div>
  </li>
</ul> */


      )};
    </div>
  );
}

export default TodoList;

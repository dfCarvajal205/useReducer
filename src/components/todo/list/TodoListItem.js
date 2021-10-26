import React from 'react';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <li key={todo.id} className='list-group-item'>
      <p onClick={() => handleToggle(todo, todo.done, todo.id)} className={ !todo.done ? '' : 'complete'}> 
        {index + 1}. {todo.desc}
      </p>
      <button
        className='btn btn-danger'
        onClick={() => handleDelete(todo)}
      >
        Borrar
      </button>
    </li>
  );
};

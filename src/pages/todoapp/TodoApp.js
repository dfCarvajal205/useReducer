import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from '../../components/todo/list/TodoList';
import { TodoAdd } from '../../components/todo/add/TodoAdd';
import './TodoApp.scss';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todo) => {
    dispatch({
      type: 'delete',
      payload: todo,
    });
  }

  const handleToggle = (todo, done, id) => {
    dispatch({
      type: 'toggle',
      payload: todo,
      done: done,
      id: id,
    });
  }

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    });
  };

  return (
    <div className='todo-container'>
      <h1>TodoApp ( {todos.length} ) </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
        </div>

        <div className='col-5'>
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};

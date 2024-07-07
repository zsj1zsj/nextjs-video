import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { toggleTodo, updateTodoText } from '../actions/todoActions';
import formatDate from '../common/dateutils';

const TodoList = () => {

  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const handleOnClick = (todoId) => {
    const newVisibility = {};

    todos.forEach(t => {
      newVisibility[t.id] = t.id === todoId ? 'visible' : 'hidden';
    });

    setVisibility(newVisibility);
  };



  const [visibility, setVisibility] = useState({});

  const handleSubmit = (todoId) => {

    // 这里添加提交逻辑，例如更新todo文本等

    console.log('Submit', text);

    dispatch(updateTodoText(todoId, text));



    // 提交后隐藏input和按钮
    setVisibility(prevVisibility => {
      let newVisibility = { ...prevVisibility };

      newVisibility[todoId] = 'hidden';

      return newVisibility;
    });
  };

  return (

    <ul>

      {todos.map(todo => (

        <li
          key={todo.id}
          
          
        >
          <div onClick={() => dispatch(toggleTodo(todo.id))} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text} - {formatDate(todo.created)}
          </div>
          <button onClick={() => handleOnClick(todo.id)}>修改</button>
          <div style={{ visibility: visibility[todo.id] || 'hidden' }}>
            <input type="text" value={text} onChange={handleOnchange} />
            <button onClick={() => handleSubmit(todo.id)}>submit</button>

          </div>
        </li>
      ))}
    </ul>
  );

};

export default TodoList;
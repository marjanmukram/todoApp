import React from 'react';

export default function Todo({ todo, index, setTodo }) {
  return (
    <div>
      `
      <form>
        <input
          type="text"
          placeholder="Enter todo"
          id={index}
          value={todo.text}
        />
      </form>
    </div>
  );
}

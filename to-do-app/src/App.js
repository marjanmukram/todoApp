import React, { useState } from 'react';
import './App.css';
import Todo from './Components/Todo';
function App() {
  const [todo, setTodo] = useState(
    '' /* [
    {
      text: 'Learn react',
      index: 1
    },
    {
      text: 'Learn functional componets',
      index: 2
    }
  ] */
  );
  return (
    <div className="App">
      <h1>To do App</h1>
      {todo &&
        todo.map((todo, index) => {
          return <Todo todo={todo} index={index} />;
        })}
      <input
        placeholder="Add Todo..."
        value={todo}
        onChange={e => {
          setTodo(e.target.value);
        }}
      />
    </div>
  );
}

export default App;

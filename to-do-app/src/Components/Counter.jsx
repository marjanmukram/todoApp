import React, { useState } from 'react';

const Counter = () => {
  //State variable name:count with initial value 0, function to update it setCount

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} />
      Click me
    </div>
  );
};

export default Counter;

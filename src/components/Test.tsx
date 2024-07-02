import { h, Component, render } from 'preact';
import React from 'preact/compat';
import { useCallback, useState } from 'preact/hooks';

interface CounterState {
  value: number;
}

function Counter() {
  const [value, setValue] = useState(0);
  const increment = useCallback(() => {
    console.log('increment')
    setValue(value + 1);
  }, [value]);

  return (
    <div>
      <p>Counter: {value}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return { increment, decrement, reset, counter };
};

export default Counter;

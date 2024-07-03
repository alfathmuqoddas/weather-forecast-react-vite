import Counter from "../function/Counter";

const CounterComponent = () => {
  const { increment, decrement, reset, counter } = Counter();

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
};

export default CounterComponent;

import { useEffect } from "react";
import { useCounterStore } from "./store";

const setCount = () => {
  useCounterStore.setState({ count: 1 });
};

function App() {
  const count = useCounterStore((state) => state.count);

  return (
    <>
      <h1>GitFrame</h1>
      <OtherComponent count={count} />
    </>
  );
}
const OtherComponent = ({ count }: { count: number }) => {
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    setCount();
  }, []);

  return (
    <div>
      {count}
      <div>
        <button onClick={incrementAsync}>incrementAsync</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </div>
  );
};

export default App;

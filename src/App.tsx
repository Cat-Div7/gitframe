import { useEffect } from "react";
import { useCounterStore } from "./store";
import { Skeleton } from "boneyard-js/react";

const setCount = () => {
  useCounterStore.setState({ count: 1 });
};

function App() {
  const count = useCounterStore((state) => state.count);

  return (
    <>
    {/* TODO: run npx boneyard build */}
      <h1>GitFrame</h1>
      <OtherComponent count={count} />
      <Skeleton name="blog-card" loading={count === 0}>
        <div style={{ width: "200px", height: "100px", background: "gray" }}>
          Blog Card
        </div>
      </Skeleton>
    </>
  );
}
const OtherComponent = ({ count }: { count: number }) => {
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    setTimeout(() => {
      setCount();
    }, 2000);
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

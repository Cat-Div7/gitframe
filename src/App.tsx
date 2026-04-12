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
      <h1>GitFrame</h1>
      <OtherComponent count={count} />
      <Skeleton name="blog-card" loading={count === 0}>
        <BlogCard />
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

function BlogCard() {
  return (
    <div
      style={{
        width: "360px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
        fontFamily: "system-ui, sans-serif",
        background: "#fff",
      }}
    >
      {/* Cover image */}
      <div
        style={{
          width: "100%",
          height: "180px",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
        }}
      />

      <div style={{ padding: "16px" }}>
        {/* Tag */}
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#667eea",
            background: "#ede9fe",
            padding: "3px 10px",
            borderRadius: "999px",
          }}
        >
          Tutorial
        </span>

        {/* Title */}
        <h2
          style={{
            margin: "10px 0 6px",
            fontSize: "18px",
            fontWeight: 700,
            color: "#111",
            lineHeight: 1.3,
          }}
        >
          How to build pixel-perfect skeleton loaders
        </h2>

        {/* Excerpt */}
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            color: "#666",
            lineHeight: 1.6,
          }}
        >
          Stop hand-coding placeholders. Learn how boneyard extracts your real
          UI layout and generates skeletons automatically.
        </p>

        {/* Author row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "16px",
            paddingTop: "14px",
            borderTop: "1px solid #f0f0f0",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f093fb, #f5576c)",
              flexShrink: 0,
            }}
          />
          <div>
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#111" }}>
              Sarah Chen
            </div>
            <div style={{ fontSize: "12px", color: "#999" }}>
              Apr 12 · 5 min read
            </div>
          </div>
          <div
            style={{
              marginLeft: "auto",
              fontSize: "12px",
              color: "#999",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            ♥ 142
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

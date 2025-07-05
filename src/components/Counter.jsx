import { useEffect, useState } from "react";
import styles from "../styles/Counter.module.css";

function Counter() {
  // Create a state
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved !== null ? Number(saved) : 0;
  });

  // save on change
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  // Create a function to handle counter increment.
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Create a function to handle counter decrement.
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <section>
      <div className={styles.heading}>
        <h2>Counter</h2>
      </div>
      <div className={styles.btn}>
        <button onClick={handleDecrement} className={styles.decrementBtn}>
          -
        </button>
        <button onClick={handleIncrement}>
          +
        </button>
      </div>
      <div className={styles.output}>Count: {count}</div>
    </section>
  );
}

export default Counter;

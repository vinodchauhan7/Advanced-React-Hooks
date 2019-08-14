import React from "react";
import { Link } from "react-router-dom";

const LayoutEffectHook = () => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log("useEffect fired");
  }, [count]);

  React.useLayoutEffect(() => {
    console.log("useLayoutEffect Fired");
  }, [count]);

  return (
    <div>
      <h6>Count : {count}</h6>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>
        Steps: 1)Open the Browser console.
        <br />
        2)Click on 'Increment Count' Button <br />
        3) See results from useEffect & <br />
        useLayoutEffect methods when they are fired. 4) UseLayoutEffect run
        before render mutations.
        <br />
        5) useEffect runs after render mutations.
      </p>

      <br />
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export default LayoutEffectHook;

import React from "react";
import { Link } from "react-router-dom";

function ReducerHook() {
  var inputRef = React.useRef(null);
  var [items, dispatch] = React.useReducer(reducerMethod, []);

  function reducerMethod(state, action) {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ];
      case "X":
        return state.filter((_, index) => index != action.index);
      default:
        return state;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`${inputRef.current.value}`);
    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  }

  return (
    <>
      <h5>useReducer Example:</h5>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <br />
      <ul>
        {items.map((item, index) => {
          return (
            <li key={item.id}>
              {item.name}
              <button
                onClick={() =>
                  dispatch({
                    type: "X",
                    index: index
                  })
                }
              >
                X
              </button>
            </li>
          );
        })}
      </ul>

      <Link to="/">Home</Link>
    </>
  );
}

export default ReducerHook;

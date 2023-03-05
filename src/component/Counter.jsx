import React, { useState } from "react";
import Counters from "./Counters";

export default function Counter() {
  const [counter, setCounter] = useState([]);
  const handleClick = (id, type) => {
    const newCount = [...counter];
    type === "increment"
      ? newCount[id].value++
      : type === "Decrement"
      ? newCount[id].value--
      : (newCount[id].value = 0);
    setCounter(counter);
  };

  const handleDelete = (id) => {
    const newCount = counter.filter((indx) => indx !== id);
    setCounter(newCount);
  };

  const handleReset = () => {
    const newCount = counter.map((item) => ({ ...item, value: 0 }));
    setCounter(newCount);
  };
  const handleClear = () => {
    setCounter([]);
  };
  const handleAdd = () => {
    const maxId = counter.length
      ? Math.max(...Counter.map((item) => item.id))
      : 0;

    setCounter(...Counter, { id: maxId + 1, value: 0 });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button type="button" onClick={handleAdd}>
              Add counter
            </button>
            <button type="button" onClick={handleClear}>
              clear
            </button>
            <button type="button" onClick={handleReset}>
              Reset All
            </button>
          </div>
        </div>
      

      <div className="row">
        {counter.length > 0 ? (
          counter.map((item, idx) => {
            return (
              <Counters
                key={idx}
                item={item}
                idx={idx}
                handleClick={handleClick}
                handleDelete={handleDelete}
              />
            );
          })
        ) : (
          <div className="col-md-3">
            <div className="alert alert-danger shadow" role="alert">
              Please add a counter
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

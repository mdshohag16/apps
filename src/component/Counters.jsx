import React from "react";

export default function Counters({
  handleClick,
  handleDelete,
  idx,
  item = {},
}) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <span>#{item.id}</span>
                <button onClick={() => handleDelete(idx)}></button>
              </div>
              <div className="card-body">
                <h3>
                  <span
                    className={`badge bg-${
                      item.value === 0
                        ? "secondary"
                        : item.value > 0
                        ? "primary"
                        : "danger"
                    }`}
                  >
                    {item.value}
                  </span>
                </h3>
                <button 
                type="button"
                onClick={() => handleClick(idx, "increment")}>
                  increment
                </button>
                <button
                type="button"
                onClick={() => handleClick(idx, "Reset")}>Reset</button>
                <button 
                type="button"
                onClick={() => handleClick(idx, "Decrement")}>
                  Decrement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

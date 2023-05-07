import Counter from "./counter";

export default function Counters({
  counters,
  onIncrement,
  onDecrement,
  onReset,
  onCreate,
  onDelete,
  onResetAll,
}) {
  return (
    <>
      <h5 className="mt-5">{`Total counters: ${counters.length}`}</h5>
      <div className="d-flex flex-column py-3 gap-3">
        <div className="d-flex flex-row justify-content-between">
          <button className="btn btn-success" onClick={onCreate}>
            <span>New counter </span>
            <i class="bi-plus-circle"></i>
          </button>
          <button className="btn btn-secondary" onClick={onResetAll}>
            <span>Reset all </span>
            <i class="bi bi-arrow-clockwise"></i>
          </button>
        </div>

        {counters.map((counter) => (
          <>
            <span>{counter.label}</span>
            <div className="card shadow-sm d-flex flex-row p-2 gap-4 justify-content-center align-items-center">
              <Counter
                key={counter.id}
                counter={counter}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onReset={onReset}
              />
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => onDelete(counter)}
              >
                <i class="bi-trash3-fill"></i>
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

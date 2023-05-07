export default function Counter({
  counter,
  onIncrement,
  onDecrement,
  onReset,
}) {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-secondary"
        disabled={counter.value <= 0}
        onClick={() => onDecrement(counter)}
      >
        <i class="bi-dash"></i>
      </button>
      <h5 class="card-title">{counter.value}</h5>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => onIncrement(counter)}
      >
        <i class="bi-plus"></i>
      </button>

      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => onReset(counter)}
      >
        <span>reset </span>
        <i class="bi-arrow-clockwise"></i>
      </button>
    </>
  );
}

import { useState } from "react";
import Counters from "./components/counters";

const initialCounters = [
  { id: 1, label: "counter 1", value: 0 },
  { id: 2, label: "counter 2", value: 0 },
  { id: 3, label: "counter 3", value: 0 },
];

function App() {
  const [counters, setCounters] = useState(initialCounters);

  const handleIncrement = (counter) => {
    // Copy state
    const _counters = [...counters];

    // Get index changed counter
    const index = _counters.indexOf(counter);

    // Increment counter
    _counters[index].value++;

    // Update state
    setCounters(_counters);
  };

  const handleDecrement = (counter) => {
    // Copy state
    const _counters = [...counters];

    // Get index changed counter
    const index = _counters.indexOf(counter);

    // Decrement counter
    _counters[index].value--;

    // Update state
    setCounters(_counters);
  };

  const handleReset = (counter) => {
    // Copy state
    const _counters = [...counters];

    // Get index changed counter
    const index = _counters.indexOf(counter);

    // Reset counter
    _counters[index].value = 0;

    // Update state
    setCounters(_counters);
  };

  const handleDelete = (counter) => {
    // Copy state
    const _counters = [...counters];

    // Get index changed counter
    const index = _counters.indexOf(counter);

    // Delete counter
    _counters.splice(index, 1);

    // Update state
    setCounters(_counters);
  };

  const handleCreate = () => {
    // Copy state
    const _counters = [...counters];

    // Create new counter
    const lastId= (_counters.length>0)? _counters[_counters.length - 1].id:0;
    
    const c = { id: lastId + 1, label: `counter ${lastId + 1}`, value: 0 };
   
    _counters.push(c);

    // Update state
    setCounters(_counters);
  };

  const handleResetAll = () => {
    // Copy state
    const _counters = counters.map((c) => ({ ...c, value: 0 }));

    // Update state
    setCounters(_counters);
  };

  return (
    <div className="container">
      <Counters
        counters={counters}
        onReset={handleReset}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onCreate={handleCreate}
        onResetAll={handleResetAll}
      />
      <br/>
      <center>
        <h7 className="my-3">
              <span>Developed by: </span> 
              <a href="https://github.com/EllenSouza">Ellen Almeida</a>
              <span> and </span>
              <a href="https://github.com/keviinsna">Kevin Sena</a>
          </h7>
      </center>
    </div>
  );
}

export default App;

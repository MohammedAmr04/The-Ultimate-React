import { useState } from "react";

export default function App() {
  let [step, setStep] = useState(1);
  let [Counter, setCounter] = useState(0);
  let today = new Date("jan 30 2025");
  today.setDate(today.getDate() + Counter);
  function handleReset() {
    setStep(1);
    setCounter(0);
  }
  return (
    <div className="container">
      <h1>Welcome to the Counter App</h1>
      <div className="step d-flex align-items-center ">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span> {step}</span>
      </div>
      <div className="counter">
        <button type="button" onClick={() => setCounter((s) => s - 1 * step)}>
          -
        </button>{" "}
        Counter : {Counter}{" "}
        <button type="button" onClick={() => setCounter((s) => s + 1 * step)}>
          +
        </button>{" "}
      </div>
      <p>
        {Counter ? `${Counter} days from` : ""} today is {today.getDate()}{" "}
        {today.toLocaleString("en-US", { month: "long" })} {today.getFullYear()}
      </p>
      <button className="btn btn-secondary" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

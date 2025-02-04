import { useState } from "react";

export function Form({ onAddItem }) {
  const [quantity, SetQuantity] = useState(1);
  const [description, SetDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
    console.log(onAddItem);
    SetDescription("");
    SetQuantity(1);
  }
  return (
    <form
      className="d-flex gap-2 py-5 justify-content-center align-items-center"
      onSubmit={handleSubmit}
    >
      <h3>What do you need for your😍trip?</h3>
      <select
        className=" rounded-5 px-3 py-2 "
        value={quantity}
        onChange={(e) => SetQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        className="rounded-5 px-3 py-2 border-0"
        type="text"
        placeholder=" Please Enter"
        value={description}
        onChange={(e) => SetDescription(e.target.value)}
      />
      <button
        className=" border-0 px-3 py-2 rounded-5  fw-bold"
        type="button"
        onClick={handleSubmit}
      >
        ADD
      </button>
    </form>
  );
}

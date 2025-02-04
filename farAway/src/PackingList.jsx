import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onToggleItem, onDeleteItem, setItems }) {
  const [searchQuery, setSearchQuery] = useState("");
  const sortedItems =
    searchQuery === "packed"
      ? items.filter((item) => item.packed === true)
      : searchQuery === "unpacked"
      ? items.filter((item) => item.packed !== true)
      : items;
  return (
    <div className="list  d-flex flex-column justify-content-between align-items-center">
      <ul className="d-flex my-0 mx-auto p-5 justify-content-between align-items-center flex-wrap gap-2 w-75">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      <div className="actions pb-5">
        <select
          className=" border-0 px-3 py-2 rounded-5  fw-bold"
          name=""
          id=""
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        >
          <option value="">All</option>
          <option value="packed">Packed</option>
          <option value="unpacked">Unpacked</option>
        </select>{" "}
        <button
          onClick={() => setItems([])}
          className=" border-0 px-3 py-2 rounded-5  fw-bold"
        >
          Clear list{" "}
        </button>
      </div>
    </div>
  );
}

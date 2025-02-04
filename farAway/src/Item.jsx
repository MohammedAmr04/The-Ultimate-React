export function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <li className="d-flex fs-2 align-items-center " role="button">
      <input
        type="checkbox"
        className="me-2 check-box"
        value={item.packed}
        onClick={() => onToggleItem(item.id)}
      />
      <div>
        {item.quantity}{" "}
        <span className={item.packed ? `text-decoration-line-through` : ""}>
          {item.description}
        </span>{" "}
        <span
          onClick={() => {
            onDeleteItem(item.id);
          }}
        >
          ❌
        </span>
      </div>
    </li>
  );
}

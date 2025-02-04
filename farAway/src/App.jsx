import { useState } from "react";
import { PackingList } from "./PackingList";
import { Form } from "./Form";
import { Logo } from "./Logo";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function AddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <>
      <Logo />
      <Form onAddItem={AddItem} />
      <PackingList
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        setItems={setItems}
      />
      <Stats items={items} />
    </>
  );
}

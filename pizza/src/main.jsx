import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return <h1 className="header">Fast React Pizza Co.</h1>;
}
function Menu() {
  return (
    <main className="menu">
      <h2>Pizza Menu</h2>
      <ul>
        {pizzaData.map((pizza) => (
          <li key={pizza.name}>
            <Pizza {...pizza} />
          </li>
        ))}
      </ul>
    </main>
  );
}
function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <div className={`pizza ${soldOut ? "soldOut" : ""}`}>
      <img src={`${photoName}`} alt={name} />
      <div className="content">
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p className="price">
          {!soldOut ? `Price: ${price.toFixed(2)}` : "Sold out"}{" "}
        </p>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

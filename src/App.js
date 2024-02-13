import { useState } from "react";
import "./App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Brush", quantity: 1, packed: true },
  { id: 4, description: "Water Bottle", quantity: 4, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far away 💼</h1>;
}
function Form() {
  const [description, setDescription] = useState("");
  const [option, setOption] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    if (!description) return;
    const newItem = { description, option, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setOption(1);
  }

  return (
    <form
      className="add-form"
      onSubmit={handleSubmit} /* this way the enter key also works*/
    >
      />
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={option}
        onChange={(e) => {
          console.log(e.target.value);
          setOption(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item.."
        //below is the controlled element
        value={description}
        onChange={(e) => {
          console.log(e);
          console.log(e.target);
          console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button>ADD</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have x items in the list, you are already packed X</em>
    </footer>
  );
}

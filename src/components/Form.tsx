import { useState } from "react";
import { PackedItem } from "../definition";

export default function Form({onAddItem}: {onAddItem: any}) {
  const [description, setDescription] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  function handleSubmit(e: any) {
    e.preventDefault();

    if(!description) return ;

    const newItem: PackedItem = {description, quantity, packed: false, id: Date.now()}

    onAddItem(newItem);
    
    // reset
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({length: 20}, (_, i) => i + 1).map((num: number) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
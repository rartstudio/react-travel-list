import { PackedItem } from "../definition";

export default function Item({ item, onDeleteItem, onToggleItem }: {item: PackedItem, onDeleteItem: any, onToggleItem: any}) {
  return (
    <li>
      <input
        type="checkbox"
        value={Number(item.packed)}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

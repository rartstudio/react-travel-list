import { useState } from "react";
import { PackedItem, SortItem } from "../definition";
import Item from "./Item";

export default function PackingList({items, onDeleteItem, onToggleItem, onClearList}: {items: PackedItem[], onDeleteItem: any, onToggleItem: any, onClearList: any}) {
  const [sortBy, setSortBy] = useState<SortItem>(SortItem.INPUT);

  let sortedItems: PackedItem[] = items;

  if(sortBy === SortItem.INPUT) sortedItems = items;
  if(sortBy === SortItem.DESCRIPTION) sortedItems = items.slice().sort((a: PackedItem, b: PackedItem) => a.description.localeCompare(b.description))
  if(sortBy === SortItem.PACKED) sortedItems = items.slice().sort((a: PackedItem, b: PackedItem) => Number(a.packed) - Number(b.packed))

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortItem)}>
          <option value={SortItem.INPUT}>Sort by input order</option>
          <option value={SortItem.DESCRIPTION}>Sort by description</option>
          <option value={SortItem.PACKED}>Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
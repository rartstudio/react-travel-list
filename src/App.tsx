import { useState } from 'react'
import './App.css'
import { PackedItem } from './definition'
import Logo from './components/Logo';
import Stats from './components/Stats';
import Form from './components/Form';
import PackingList from './components/PackingList';

export default function App() {
  const [items, setItems] = useState<PackedItem[]>([]);

  function handleAddItem(item: PackedItem): void {
    setItems((items: PackedItem[]) => [...items, item]);
  }

  function handleDeleteItem(id: number): void {
    setItems((items: PackedItem[]) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: number): void {
    setItems((items: PackedItem[]) => items.map((item: PackedItem) => item.id === id ? {...item, packed: !item.packed}: item))
  }

  function handleClearList(): void {
    const confirmed = window.confirm("Are you sure you want to delete all items?")
    if(confirmed) setItems([]);
  }

  return (
    <div className='app'>
      <Logo/>
      <Form onAddItem={handleAddItem}/>
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items}/>
    </div>
  );
}

import { useState } from "react"; 
import Items from "./Items" 

export default function PackingList({ items, onDeleteItems, onToggleItem, onClearList}) {
    const [sortBy, setSortBy] = useState("input");
    let sortedItems;
  
    if (sortBy === "input") sortedItems = items;
  
    if (sortBy === "description")
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
  
        if (sortBy === "packed")
        sortedItems = items
          .slice()
          .sort((a, b) => Number(a.packed) - Number(b.packed));
     
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Items
              item={item}
              onDeleteItems={onDeleteItems}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          ))}
        </ul>
  
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sord by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={onClearList}>Clear List</button>
        </div>
      </div>
    );
  }
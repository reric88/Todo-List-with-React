import { useState } from "react";

export function NewTodoForm({ chicken }){
    const [newItem, setNewItem] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === '') return
        chicken(newItem)
        setNewItem("")
    }

    return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="item"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        <button className="button button-add">Add</button>
        </div>
      </form>
    )
}
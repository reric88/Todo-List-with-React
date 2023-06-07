export function TodoItem({ completed, id, title, toggleTodo, deleteTodo}){
    return (
        <li>
        <label>
          <input 
          className="checkbox" 
          type="checkbox" checked={completed} 
          onChange={e => toggleTodo(id, e.target.checked)} 

          />
          {title}
        </label>
        <button 
        onClick={() => deleteTodo(id)} 
        className="button button-delete">Delete</button>
      </li>
    )
}
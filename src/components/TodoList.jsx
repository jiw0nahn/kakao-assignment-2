import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  if (todos.length === 0) {
    return (
      <div className="text-center text-gray-300 py-15">
        할 일이 없습니다.
      </div>
    );
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
            onEdit={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}
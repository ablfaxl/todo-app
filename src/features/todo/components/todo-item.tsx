import React, { useState } from "react";
import "./todo.modules.css";
import { TodoItemProps } from "../types/todo.types.ts";
import { EditTodo } from "./edit-todo.tsx";

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <EditTodo
        todo={todo}
        onSave={(id, newText) => {
          onEdit(id, newText);
          setIsEditing(false);
        }}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <li className={"todoItem"}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className={"checkbox"}
      />
      <span className={`${"todoText"} ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </span>
      <div className={"buttonContainer"}>
        <button onClick={() => setIsEditing(true)} className={"editButton"}>
          <span className="sr-only">Edit</span>
        </button>
        <button onClick={() => onDelete(todo.id)} className={"deleteButton"}>
          <span className="sr-only">Delete</span>
        </button>
      </div>
    </li>
  );
};

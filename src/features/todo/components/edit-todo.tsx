import React, { useState } from "react";
import "./todo.modules.css";
import { EditTodoProps } from "../types/todo.types.ts";

export const EditTodo: React.FC<EditTodoProps> = ({
  todo,
  onSave,
  onCancel,
}) => {
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    if (editedText.trim()) {
      onSave(todo.id, editedText);
    }
  };

  return (
    <div className={"editTodo"}>
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSave()}
        className={"input"}
      />
      <div className={"buttonContainer"}>
        <button onClick={handleSave} className={"saveButton editButton"}>
          Save
        </button>
        <button onClick={onCancel} className={"cancelButton editButton"}>
          Cancel
        </button>
      </div>
    </div>
  );
};

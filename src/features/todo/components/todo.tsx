import React, { useState } from "react";
import "./todo.modules.css";
import { Todo, TodoListProps } from "../types/todo.types.ts";
import { useLocalStorage } from "../../../hooks/use-localstorage.ts";
import { TodoItem } from "./todo-item.tsx";

export const TodoList: React.FC<TodoListProps> = ({ initialTodos = [] }) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", initialTodos);
  const [newTodoText, setNewTodoText] = useState("");

  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos([
        ...todos,
        {
          id: String(Math.random() + new Date().getDate()),
          text,
          completed: false,
        },
      ]);
      setNewTodoText("");
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={"todoList"}>
      <h1 className={"title"}>Todo List</h1>
      <div className={"inputContainer"}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo(newTodoText)}
          placeholder="Add a new todo..."
          className={"input"}
        />
        <button onClick={() => addTodo(newTodoText)} className={"addButton"}>
          Add
        </button>
      </div>
      <ul className={"list"}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={editTodo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

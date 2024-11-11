export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newText: string) => void;
}

export interface TodoListProps {
    initialTodos?: Todo[];
}

export interface EditTodoProps {
    todo: Todo;
    onSave: (id: string, newText: string) => void;
    onCancel: () => void;
}
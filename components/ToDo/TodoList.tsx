import React from 'react'
import TodoItem from './TodoItem';
import { ScrollView } from 'react-native';

type Todo = {
    id: number;
    text: string;
}

type Props = {
    todos: Todo[];
    onDelete: (id: number) => void;
}

export default function TodoList({todos, onDelete}: Props) {
// Сделать надпись если дел нет
  return (
    <ScrollView
        keyboardShouldPersistTaps='handled'
    >
        {todos.map((todo) => (
            <TodoItem
                key={todo.id}
                text={todo.text}
                onDelete={() => onDelete(todo.id)}
            />
        ))}
    </ScrollView>
  )
}

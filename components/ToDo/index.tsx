import React, { useState } from 'react'
import { Text, View } from 'react-native';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

type Todo = {
    id: number;
    text: string;
}

export default function Todo() {
    const [todos, setTodos] = useState<Todo[]>([
        {id: 1, text: 'Дело 1'},
        {id: 2, text: 'Дело 2'}
    ])

    function handleAdd (text: string) {
        const newTodo: Todo = {
            id: Date.now(),
            text,
        }
        setTodos([...todos, newTodo])
    }

    function handleDelete(id: number) {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

  return (
    <View>
        <View>
            <Text>To Do count: {todos.length}</Text>
        </View>
        <TodoInput onAdd={handleAdd}/>
        <TodoList 
            todos={todos}
            onDelete={handleDelete}
        />
    </View>
  )
}


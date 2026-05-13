import TodoInput from '@/components/ToDo/TodoInput';
import TodoList from '@/components/ToDo/TodoList';
import React, { useCallback, useState } from 'react'
import { Text, View } from 'react-native';
import { addTodo, deleteTodo, Todo, todosStore } from '../store/todos';
import { useFocusEffect, router } from 'expo-router';

export default function TodoScreen() {
    const [todos, setTodos] = useState<Todo[]>(todosStore)

    useFocusEffect( // для синхронизации со стором
        useCallback(() => {
            setTodos([...todosStore])
            return()=>{}
        }, [])
    )

    function handleAdd (text: string) {
        addTodo(text)
        setTodos([...todosStore])
    }

    function handlePress(todo: Todo) {
        router.push({ pathname: '/todo/[id]', params: {id: todo.id}})
    }
    

  return (
    <View>
        <View>
            <Text>To Do count: {todos.length}</Text>
        </View>
        <TodoInput onAdd={handleAdd}/>
        <TodoList 
            todos={todos}
            onPress={handlePress}
        />
    </View>
  )
}


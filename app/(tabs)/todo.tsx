import TodoInput from '@/components/ToDo/TodoInput';
import TodoList from '@/components/ToDo/TodoList';
import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native';
import { useFocusEffect, router } from 'expo-router';
import { addTodo, getTodos, Todo } from '../api/todos';

export default function TodoScreen() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        loadTodos()
    }, [])

    async function loadTodos() {
        try {
            setLoading(true)
            setError(null)
            const data = await getTodos()
            setTodos(data)
        } catch (error) {
            setError(`Ошибка: ${error}`)
        } finally {
            setLoading(false)
        }
    }

    async function handleAdd (title: string) {
        try {
            const newTodo = await addTodo(title)
            setTodos(prev => [newTodo, ...prev])
        } catch (error) {
            setError(`Ошибка: ${error}`)
        }
    }

    function handlePress(todo: Todo) {
        router.push({ pathname: '/todo/[id]', params: {id: todo.id}})
    }

    if (loading) {
        return (
            <View>
                <ActivityIndicator size='large'/>
                <Text>Загрузка</Text>
            </View>
        )
    }

    if (error) {
        return (
            <View>
                <Text>{error}</Text>
            </View>
        )
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


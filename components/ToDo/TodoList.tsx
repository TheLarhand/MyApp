import React from 'react'
import TodoItem from './TodoItem';
import { ScrollView, StyleSheet } from 'react-native';
import { Todo } from '@/app/store/todos';

type Props = {
    todos: Todo[];
    onPress: (todo: Todo) => void;
}

export default function TodoList({todos, onPress}: Props) {
// Сделать надпись если дел нет
  return (
    <ScrollView
        keyboardShouldPersistTaps='handled'
        style={styles.todoList}
    >
        {todos.map((todo) => (
            <TodoItem
                key={todo.id}
                text={todo.text}
                todo={todo}
                onPress={() => onPress(todo)}
            />
        ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    todoList: {
        backgroundColor: 'white'
    }
})

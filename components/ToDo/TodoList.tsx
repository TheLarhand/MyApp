import React from 'react'
import TodoItem from './TodoItem';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Todo } from '@/app/api/todos';

type Props = {
    todos: Todo[];
    onPress: (todo: Todo) => void;
}

export default function TodoList({todos, onPress}: Props) {
  return (
    <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        style= {styles.todoList}
        renderItem={({item}) => (
            <TodoItem
                text={item.title}
                todo={item}
                onPress={() => onPress(item)}
            />
        )}
        ListEmptyComponent={
            <Text>Задач нет</Text>
        }
        keyboardShouldPersistTaps='handled'
    />

    // <ScrollView
    //     keyboardShouldPersistTaps='handled'
    //     style={styles.todoList}
    // >
    //     {todos.map((todo) => (
    //         <TodoItem
    //             key={todo.id}
    //             text={todo.title}
    //             todo={todo}
    //             onPress={() => onPress(todo)}
    //         />
    //     ))}
    // </ScrollView>
  )
}

const styles = StyleSheet.create({
    todoList: {
        backgroundColor: 'white',
        height: 200
    }
})

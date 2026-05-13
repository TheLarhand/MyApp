import { router, useLocalSearchParams } from "expo-router";
import { deleteTodo, todosStore, toggleTodo } from "../store/todos";
import { Alert, Button, Pressable, Text, View } from "react-native";

export default function TodoDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>()

    const todo = todosStore.find((t) => t.id === Number(id))

    if (!todo) {
        return (
            <View>
                <Text>Задача не найдена :(</Text>
                <Button title="Назад" onPress={() => router.back()} />
            </View>
        )
    }

    function handleToggleDone() {
        toggleTodo(Number(id))
        router.back()
    }

    function handleDelete(id: number) {
        const todoId = Number(id)

        deleteTodo(todoId)
                    router.back()

        // Alert.alert('Удалить текущую задачу?', 'Это необратимо!', [
        //     { text: 'Отмена' },
        //     {
        //         text: 'Удалить',
        //         onPress: () => {
        //             deleteTodo(todoId)
        //             router.back()
        //         }
        //     }
        // ])

    }

    return (
        <View>
            <Text>{todo.text} {id}</Text>
            <Text>{todo.done ? 'Выполнено' : 'Не выполнено'}</Text>
            <Button title="удалить"  onPress={() => handleDelete(Number(id))} />
            <Button title="Выполнить" onPress={handleToggleDone} />
        </View>
    )
}
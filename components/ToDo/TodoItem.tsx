import { Todo } from '@/app/store/todos';
import React, { useState } from 'react'
import { Button, Pressable, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

type Props = {
    text: string;
    todo: Todo;
    onPress: (todo: Todo) => void;
}

export default function TodoItem({ text, todo, onPress }: Props) {
    const [pressed, setPressed] = useState(false)
    return (
        <View>
            <Text>{text}</Text>
            <View>
                <Pressable
                    style={({ pressed }) => [
                        styles.button3,
                        pressed && styles.button3Active
                    ]}
                    onPress={() => onPress(todo)}
                    onPressIn={() => setPressed(true)}
                    onPressOut={() => setPressed(false)}
                >
                    <Text style={styles.buttonText}>
                        {pressed? 'Отпусти' : 'Перейти'}
                    </Text>
                </Pressable>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
    },
    button2: {
        backgroundColor: 'violet',
        borderRadius: 3
    },
    button3: {
        backgroundColor: 'purple',
        borderRadius: 3
    },
    button3Active: {
        backgroundColor: 'blue',
    }
})

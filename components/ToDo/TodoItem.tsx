import React, { useState } from 'react'
import { Button, Pressable, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

type Props = {
    text: string;
    onDelete: () => void;
}

export default function TodoItem({ text, onDelete }: Props) {
    const [pressed, setPressed] = useState(false)
    return (
        <View>
            <Text>{text}</Text>
            <View>
                <Button
                    title='delete 1'
                    color='red'
                    onPress={onDelete}
                />

                <TouchableOpacity
                    style={styles.button2}
                    onPress={onDelete}
                    activeOpacity={0.5}
                >
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>

                <Pressable
                    style={({ pressed }) => [
                        styles.button3,
                        pressed && styles.button3Active
                    ]}
                    onPress={onDelete}
                    onPressIn={() => setPressed(true)}
                    onPressOut={() => setPressed(false)}
                >
                    <Text style={styles.buttonText}>
                        {pressed? 'Отпусти' : 'Delete'}
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

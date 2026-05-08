import React, { useState } from 'react'
import { Button, Keyboard, TextInput, View } from 'react-native';

type Props = {
    onAdd: (text: string) => void;
}

export default function TodoInput({onAdd}: Props) {
    const [text, setText] = useState('')

    function handleAdd() {
        if (text.trim() === '') return;
        onAdd(text.trim());
        setText('');
        Keyboard.dismiss();
    }

  return (
    <View>
        <TextInput
            value={text}
            onChangeText={setText}
            onSubmitEditing={handleAdd}
            placeholder='New task'
            placeholderTextColor='gray'

        />
        <Button title='Add' onPress={handleAdd} />
    </View>
  )
}
